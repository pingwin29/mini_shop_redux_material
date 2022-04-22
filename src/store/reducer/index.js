import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { favouriteProductReducer } from "./favouriteProductReducer";
import { cartproductreducer } from "./cartprodcutreducer";
export const reducers = combineReducers({
  products: productReducer,
  favouriteLists: favouriteProductReducer,
  cartProducts: cartproductreducer,
});
