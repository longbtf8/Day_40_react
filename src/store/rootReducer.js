import { reducer as postReducer } from "@/features/post";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  post: postReducer,
});
export default rootReducer;
