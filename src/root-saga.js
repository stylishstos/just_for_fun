import { all } from "redux-saga/effects";

import merchantSaga from "./sagas/merchant-saga";

export default function*() {
  yield all([merchantSaga()]);
}
