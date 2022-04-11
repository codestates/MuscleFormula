import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userInfoReducer = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    LOG_IN : (state, action: PayloadAction<{id: number, nickname: string, image: string, accessToken :string, loginType:string}>) => {
      state.userInfo = action.payload;
      state.isLogin = true;
      //localStorage에도 저장
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      localStorage.setItem('isLogin', JSON.stringify(true));
    },
    LOG_OUT : state => {
      state.userInfo = {id: '', nickname: '', image: '', accessToken: '', loginType: ''};
      state.isLogin = false;
      //localStorage에서도 삭제
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLogin');
    },
    EDIT_IMAGE : (state, action: PayloadAction<string>) => {
      let localUser = localStorage.getItem('userInfo');
      if(localUser !== null) {
        state.userInfo = JSON.parse(localUser);
      }
      state.userInfo.image = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    EDIT_NICK : (state, action: PayloadAction<string>) => {
      let localUser = localStorage.getItem('userInfo');
      if(localUser !== null) {
        state.userInfo = JSON.parse(localUser);
      }
      state.userInfo.nickname = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    }
  }
})
export const {LOG_IN, LOG_OUT, EDIT_IMAGE, EDIT_NICK}  = userInfoReducer.actions;
export default userInfoReducer.reducer