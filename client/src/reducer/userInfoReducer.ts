import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringify } from "querystring";

export const userInfoReducer = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    LOG_IN : (state, action: PayloadAction<{id: number, nickname: string, image: string}>) => {
      state.userInfo = action.payload;
      state.isLogin = true;
      //localStorage에도 저장
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      localStorage.setItem('isLogin', JSON.stringify(true));
    },
    LOG_OUT : state => {
      state.userInfo = {id: '', nickname: '', image: ''};
      state.isLogin = false;
      //localStorage에서도 수정
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLogin');
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