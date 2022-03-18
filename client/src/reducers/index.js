import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer.js';
import notificationReducer from './notificationReducer.js';

const rootReducer = combineReducers({
  userInfoReducer,
  notificationReducer
});

export default rootReducer;