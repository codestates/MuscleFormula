import { configureStore } from "@reduxjs/toolkit";
import shareReducer from "../reducer/shareReducer";
import userInfoReducer from "../reducer/userInfoReducer";
import postReducer from "../reducer/postReducer";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    shareRecord: shareReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
