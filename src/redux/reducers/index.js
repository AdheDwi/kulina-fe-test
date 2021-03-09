import { combineReducers } from "redux";
import { layoutReducer } from "./layout";
import { cartReducer } from "./cart";

const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer,
});

export default rootReducer;
