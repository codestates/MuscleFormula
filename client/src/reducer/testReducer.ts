import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const testReducer = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    ADD : (state, action: PayloadAction<{id: number, name: string, quan: number}>) => {
      state.test.push(action.payload)
    },
    QUAN : state => {
      state.test.forEach(el => el.quan++);
    },
    OUT : state => {
      state.test.pop();
    }
  }
})
export const {ADD, QUAN, OUT}  = testReducer.actions;
export default testReducer.reducer
