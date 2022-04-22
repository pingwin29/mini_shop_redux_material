export const cartproductreducer = (state = { products: [], total: 0 }, action) => {
  switch (action.type) {
    case "ADD_CART":
      const newProduct = { ...action.payload, total: action.payload.price, qty: 1 };

      state = {
        products: [...state.products, newProduct],
        total: state.total + action.payload.price,
      };

      return state;

    case "Sub_CART":
      //remove product from cart products
      const filterProduct = state.products.filter((data) => data.id != action.payload.id);

      state = { products: filterProduct, total: state.total - action.payload.total };

      return state;

    case "Plus_Qty":
      const PlusProductAndOtherProduct = state.products.map((data) => {
        if (data.id == action.payload.id) {
          data.qty = data.qty + 1;
          data.total = data.total + data.price;
          return data;
        }
        return data;
      });

      state = {
        products: PlusProductAndOtherProduct,
        total: state.total + action.payload.price,
      };
      return state;

    case "Sub_Qty":
      const SubProductAndOtherProduct = state.products.map((data) => {
        if (data.id == action.payload.id) {
          data.qty = data.qty - 1;
          data.total = data.total - data.price;
          return data;
        }
        return data;
      });
      state = {
        products: SubProductAndOtherProduct,
        total: state.total - action.payload.price,
      };
      return state;

    default:
      return state;
  }
};
