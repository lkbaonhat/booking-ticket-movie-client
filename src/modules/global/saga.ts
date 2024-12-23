import { call, put, takeLatest } from "redux-saga/effects";
import { setListBanner, setListCinemaSystem, setListFilm } from "./slice";
//Api services
import { manageFilmService } from "@services/ManageFilmService";
import { manageCinemaService } from "@services/ManageCinemaService";

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
}
