import { takeEvery, put } from "redux-saga/effects";

import { merchantRegister } from "../actions/types";

function* register({ payload }) {
  yield put({ type: merchantRegister.resolve });
}

export default function*() {
  yield takeEvery(merchantRegister.pending, register);
}
