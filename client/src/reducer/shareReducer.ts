import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const shareReducer = createSlice({
  name: "shareRecord",
  initialState: initialState,
  reducers: {
    SHARE: (
      state,
      action: PayloadAction<
        { genre: string; weight: number; count: number; time_record: number }[]
      >
    ) => {
      state.shareRecord = action.payload;
      localStorage.setItem("shareRecords", JSON.stringify(action.payload));
    },
    SHARE_ID: (state, action: PayloadAction<number | string>) => {
      state.shareRecordId = action.payload;
      localStorage.setItem("shareRecordsId", JSON.stringify(action.payload));
    },
    RESET: (state) => {
      state.shareRecord = [];
      state.shareRecordId = "";
      localStorage.removeItem("shareRecords");
      localStorage.removeItem("shareRecordsId");
    },
  },
});
export const { SHARE, SHARE_ID, RESET } = shareReducer.actions;
export default shareReducer.reducer;
