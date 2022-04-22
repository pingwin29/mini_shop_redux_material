export const addToCartAction = (data) => {
  return { type: "ADD_CART", payload: data };
};
export const removeFromCartAction = (data) => {
  return { type: "Sub_CART", payload: data };
};

export const PlusQty = (data) => {
  return { type: "Plus_Qty", payload: data };
};

export const SubQty = (data) => {
  return { type: "Sub_Qty", payload: data };
};
