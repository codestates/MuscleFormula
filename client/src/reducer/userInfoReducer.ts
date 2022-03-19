import { initialState } from "./initialState";

const userInfoReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'LOG_IN' :
      return Object.assign({}, state, {
        userInfo: [...state.userInfo, action.payload]
      })
    case 'LOG_OUT' :
      state.test.forEach(el => el.quan++);
      return Object.assign({}, state, {
        userInfo: []
      })
    default: 
    return state
  }
}
export default userInfoReducer;