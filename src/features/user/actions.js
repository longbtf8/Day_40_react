import { SET_ITEMS } from "./consts";

export const setItems = (payload) => {
  return {
    type: SET_ITEMS,
    payload,
  };
};
