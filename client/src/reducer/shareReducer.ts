import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const shareReducer = createSlice({
  name: 'shareRecord',
  initialState: initialState,
  reducers: {
    SHARE : (state, action: PayloadAction<{genre: string, weight: number, count: number, time_record :number}[]>) => {
      state.shareRecord = action.payload;
    },
    RESET : (state) => {
      state.shareRecord = [];
    }
  }
})
export const {SHARE, RESET}  = shareReducer.actions;
export default shareReducer.reducer