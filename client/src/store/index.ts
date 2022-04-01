import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterReducer";
import shareReducer from "../reducer/shareReducer";
import testReducer from "../reducer/testReducer";
import userInfoReducer from "../reducer/userInfoReducer";
import postReducer from "../reducer/postReducer";

export const store = configureStore({
  reducer: {
    test: testReducer,
    counter: counterReducer,
    userInfo: userInfoReducer,
    shareRecord: shareReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
