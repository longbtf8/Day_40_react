import { reducer as postReducer } from "@/features/post";
import { reducer as userReducer } from "@/features/user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});
export default rootReducer;
