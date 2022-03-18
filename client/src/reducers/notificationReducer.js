import { NOTIFY, DE_NOTIFY } from '../actions/index';
import { initialState } from './initialState';

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case NOTIFY:
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.payload]
      })
    case DE_NOTIFY:
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.payload]
      })
      
    default:
      return state;
  }
}

export default notificationReducer;