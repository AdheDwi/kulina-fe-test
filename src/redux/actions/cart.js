import { ADD_CART } from "../types";

export const addCartAction = (data) => {
  return {
    type: ADD_CART,
    data,
  };
};
