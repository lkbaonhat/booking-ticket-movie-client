import { manageFilmService } from "@services/ManageFilmService";
import { call, put, takeLatest } from "redux-saga/effects";
import { setListBanner } from "./slice";

function* getListBanner(): Generator<any, void, any> {
  try {
    const res = yield call(manageFilmService.getListBanner);
    yield put(setListBanner(res.data.content));
  } catch (error) {
    console.error("Error", error);
  }
}

export function* watchEditorGlobalSaga() {
  yield takeLatest("getBanner", getListBanner);
}
