import { ADD_CART } from "../types";

const initialStateChat = {
  items: [],
  sumPrice: 0,
};

export const cartReducer = (state = initialStateChat, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        items: [...state.items, action.data],
        sumPrice: state.sumPrice + action.data.price,
      };
    default:
      return state;
  }
};
