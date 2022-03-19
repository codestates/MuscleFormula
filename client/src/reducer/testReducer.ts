import { initialState } from "./initialState";

const testReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'ADD' :
      return Object.assign({}, state, {
        test: [...state.test, action.payload]
      })
    case 'QUANTITY_UP' :
      state.test.forEach(el => el.quan++);
      return Object.assign({}, state, {
        test: [...state.test]
      })
    case 'OUT' :
      state.test.pop();
      return Object.assign({}, state, {
        test: [...state.test]
      })
    default: 
    return state
  }
}
export default testReducer;