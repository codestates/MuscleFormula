import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const shareReducer = createSlice({
  name: "shareRecord",
  initialState: initialState,
  reducers: {
    POST_ID: (state, action: PayloadAction<number | null>) => {
      state.postId = action.payload;
      localStorage.setItem("PostId", JSON.stringify(action.payload));
    },
  },
});
export const { POST_ID } = shareReducer.actions;
export default shareReducer.reducer;
