import { manageFilmService } from "@services/ManageFilmService";
import { call, put, takeLatest } from "redux-saga/effects";

function* getListBanner(): Generator<any, void, any> {
  try {
    const res = yield call(manageFilmService.getListBanner);
    yield put(res);
  } catch (error) {
    console.error("Error", error);
  }
}

export function* watchEditorGlobalSaga() {
  yield takeLatest;
}
