import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecordType {
  id: number;
  genre: string,
  weight: number,
  count: number,
  time_record: number
}

export const recordReducer = createSlice({
  name: 'record',
  initialState: initialState,
  reducers: {
    ADD : (state, action: PayloadAction<RecordType>) => {
      state.record.push(action.payload);
    },
    DELETE : (state, action: PayloadAction<{id: number}>) => {
      const newState = state.record.filter((el) => el.id !== action.payload.id);
      state.record = newState;
    }
  }
})
export const {ADD, DELETE}  = recordReducer.actions;
export default recordReducer.reducer