import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

const editorSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setListBanner(state, action: PayloadAction<any>) {
      state.arrImg = action.payload;
    },
    setListFilm(state, action: PayloadAction<any>) {
      state.arrFilm = action.payload;
    },
    setListCinemaSystem(state, action: PayloadAction<any>) {
      state.cinemaSystem = action.payload;
    },
    setFilmDetail(state, action: PayloadAction<any>) {
      state.filmDetail = action.payload;
    },
  },
});

export const {
  setListBanner,
  setListFilm,
  setListCinemaSystem,
  setFilmDetail,
} = editorSlice.actions;

export default editorSlice.reducer;
