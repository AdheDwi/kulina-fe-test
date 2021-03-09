import { LAYOUT_SET_DATE, LAYOUT_SET_LOCATION } from "../types";

export const setDateAction = (data) => {
  return {
    type: LAYOUT_SET_DATE,
    data,
  };
};

export const setLocationAction = (data) => {
  return {
    type: LAYOUT_SET_LOCATION,
    data,
  };
};
