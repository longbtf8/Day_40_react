import Post from "@/pages/PostsList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  post: Post,
});
export default rootReducer;
