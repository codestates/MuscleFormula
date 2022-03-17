import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer.js';

const rootReducer = combineReducers({
  userInfoReducer,
});

export default rootReducer;