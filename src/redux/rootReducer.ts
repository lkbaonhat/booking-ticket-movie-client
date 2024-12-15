import { combineReducers } from "redux";
import globalReducer from "@/modules/global/slice";

const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
