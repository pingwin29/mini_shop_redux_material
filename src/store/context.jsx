import React, { createContext, useReducer } from "react";
import { api } from "./api";

const initialValue = {
  data: api,
  cart: [],
  total: 0,
  addToCart: () => {},
  Cancel: () => {},
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "add":
      return { cart: [...state.cart, action.data], total: action.total };
      break;
    case "update":
      const update = [...state.cart];
      update[action.arrayIndex].qty += action.qty;
      return { cart: update, total: action.total };
      break;
    case "delete":
      return { cart: action.cart, total: action.total };
      break;
    default:
      return state;
      break;
  }
};

const context = createContext(initialValue);

export const ContextProvider = (props) => {
  const [cart, dispatchCart] = useReducer(reducerFunction, {
    cart: [],
    total: 0,
  });

  const addToCart = (data) => {
    const index = cart.cart.findIndex((e) => {
      return e.productId == data.productId;
    });

    if (index != -1) {
      const limit = cart.cart[index].qty != 1 || data.qty > 0;

      limit &&
        dispatchCart({
          type: "update",
          qty: Number(data.qty),
          total: cart.total + data.price * data.qty,
          arrayIndex: index,
        });
    } else {
      dispatchCart({
        type: "add",
        data: data,
        total: cart.total + data.price * data.qty,
      });
    }
  };
  const cancel = (data) => {
    const filter = cart.cart.filter((e) => {
      return e.productId != data.id;
    });
    console.log({ data });
    console.log(cart.cart);
    console.log({ filter });
    console.log(cart.total);
    console.log(cart.total - data.price);
    dispatchCart({
      type: "delete",
      cart: filter,
      total: cart.total - data.price,
    });
  };

  const value = {
    data: api,
    cart: cart.cart,
    total: cart.total,
    addToCart: addToCart,
    Cancel: cancel,
  };
  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default context;
