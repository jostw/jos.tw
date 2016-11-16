import { takeLatest, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions';

export function* startHello() {
  yield call(delay, 1000);
  yield put(actions.showHelloMessage(0));
  yield call(delay, 1000);
  yield put(actions.showHelloMessage(1));
}

export function* watchStartHello() {
  yield* takeLatest(actions.START_HELLO, startHello);
}

export default function* rootSaga() {
  yield fork(watchStartHello);
}
