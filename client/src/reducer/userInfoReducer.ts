import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userInfoReducer = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    LOG_IN : (state, action: PayloadAction<{id: number, nickname: string, email: string}>) => {
      state.userInfo.push(action.payload)
    },
    LOG_OUT : state => {
      state.userInfo = [];
    },
  }
})
export const {LOG_IN, LOG_OUT}  = userInfoReducer.actions;
export default userInfoReducer.reducer



// import { initialState } from "../store/initialState";

// const userInfoReducer = (state = initialState, action: any) => {
//   switch(action.type) {
//     case 'LOG_IN' :
//       return Object.assign({}, state, {
//         userInfo: [...state.userInfo, action.payload]
//       })
//     case 'LOG_OUT' :
//       state.test.forEach(el => el.quan++);
//       return Object.assign({}, state, {
//         userInfo: []
//       })
//     default: 
//     return state
//   }
// }
// export default userInfoReducer;