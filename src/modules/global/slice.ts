import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

const editorSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setListBanner(state, action: PayloadAction<any>) {
      state.arrImg = action.payload;
    },
  },
});

export const {} = editorSlice.actions;

export default editorSlice.reducer;
