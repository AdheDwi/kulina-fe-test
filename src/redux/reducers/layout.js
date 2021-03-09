import { LAYOUT_SET_DATE, LAYOUT_SET_LOCATION } from "../types";

const initialStateChat = {
  dates: "",
  locations: "",
};

export const layoutReducer = (state = initialStateChat, action) => {
  switch (action.type) {
    case LAYOUT_SET_DATE:
      return {
        ...state,
        dates: action.data,
      };

    case LAYOUT_SET_LOCATION:
      return {
        ...state,
        locations: action.data,
      };
    default:
      return state;
  }
};
