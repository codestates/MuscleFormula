import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    PLUS : state => {
      state.count += 1
    },
    MINUS : state => {
      state.count -= 1
    },
    CHOICE : (state, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})
export const {PLUS, MINUS, CHOICE}  = counterReducer.actions;
export default counterReducer.reducer