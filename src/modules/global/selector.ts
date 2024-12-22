import { RootState } from "@/redux/store";

export const selectBanner = (state: RootState) => state.global.arrImg;
export const selectListFilm = (state: RootState) => state.global.arrFilm;
export const selectCinemaSystem = (state: RootState) =>
  state.global.cinemaSystem;
export const selectDangChieu = (state: RootState) => state.global.dangChieu;
export const selectSapChieu = (state: RootState) => state.global.sapChieu;
