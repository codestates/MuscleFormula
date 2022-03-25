import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterReducer";
import testReducer from "../reducer/testReducer";
import userInfoReducer from "../reducer/userInfoReducer";
import recordReducer from "../reducer/recordReducer";

export const store = configureStore({
  reducer: {
    test: testReducer,
    counter: counterReducer,
    userInfo: userInfoReducer,
    record: recordReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch