import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      //localStorage에서도 삭제
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLogin');
    },
  }
})
export const {LOG_IN, LOG_OUT}  = userInfoReducer.actions;
export default userInfoReducer.reducer