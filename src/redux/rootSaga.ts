import { all } from "axios";
import { watchEditorGlobalSaga } from "../modules/global/saga";

export default function* rootSaga() {
  yield all([watchEditorGlobalSaga()]);
}
