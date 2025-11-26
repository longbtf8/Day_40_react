import { SET_ITEMS } from "./consts";

const initState = {
  items: [],
};
const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: actions.payload,
      };
    default:
      return state;
  }
};
export default reducer;
