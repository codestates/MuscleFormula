import { combineReducers } from "redux";
import testReducer from "./testReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
  testReducer, userInfoReducer
})