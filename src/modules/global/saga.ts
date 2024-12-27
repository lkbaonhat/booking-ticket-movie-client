import { call, put, takeLatest } from "redux-saga/effects";
import {
  setFilmDetail,
  setListBanner,
  setListCinemaSystem,
  setListFilm,
} from "./slice";
//Api services
import { manageFilmService } from "@services/ManageFilmService";
import { manageCinemaService } from "@services/ManageCinemaService";

//____Film
function* getListBanner(): Generator<any, void, any> {
  try {
    const res = yield call(manageFilmService.getListBanner);
    yield put(setListBanner(res.data.content));
  } catch (error) {
    console.error("Error", error);
  }
}

function* getListFilm(action: any): Generator<any, void, any> {
  const { filmName } = action.payload;
  try {
    const res = yield call(manageFilmService.getListFilm, filmName);
    yield put(setListFilm(res.data.content));
  } catch (error) {
    console.error("Error", error);
  }
}

function* getFilmDetail(action: any): Generator<any, void, any> {
  const { filmCode } = action.payload;
  try {
    const res = yield call(manageFilmService.getFilmDetail, filmCode);
    yield put(setFilmDetail(res.data.content));
  } catch (error) {
    console.error("Error", error);
  }
}

//____Cinema System
function* getListCinemaSystem(): Generator<any, void, any> {
  try {
    const res = yield call(manageCinemaService.getListCinemaSystem);
    yield put(setListCinemaSystem(res.data.content));
  } catch (error) {
    console.error("Error", error);
  }
}

export function* watchEditorGlobalSaga() {
  yield takeLatest("getBanner", getListBanner);
  yield takeLatest("getListFilm", getListFilm);
  yield takeLatest("getListCinemaSystem", getListCinemaSystem);
  yield takeLatest("getFilmDetail", getFilmDetail);
}
