import { LOG_IN, LOG_OUT } from '../actions/index';
import { initialState } from './initialState';

const userInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return Object.assign({}, state, {
        userInfo: [...state.userInfo, action.payload]
      })
    case LOG_OUT:
      return Object.assign({}, state, {
        userInfo: [...state.userInfo, action.payload]
      })
    default:
      return state;
  }
}

export default userInfoReducer;