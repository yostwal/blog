import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  dummyReducer: () => "dummy reducer",
  posts: postsReducer,
  users: userReducer,
});
