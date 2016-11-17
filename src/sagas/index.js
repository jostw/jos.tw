import { takeLatest, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions';

export function* startHello() {
  yield call(delay, 1000);
  yield put(actions.enterHelloMessage(0));
  yield call(delay, 600);
  yield put(actions.showHelloMessage(0));
  yield call(delay, 1000);
  yield put(actions.enterHelloMessage(1));
  yield call(delay, 600);
  yield put(actions.showHelloMessage(1));

  yield call(delay, 1000);
  yield put(actions.startAbout());
}

export function* startAbout() {
  yield call(delay, 1000);
  yield put(actions.enterAboutMessage(0));
  yield call(delay, 600);
  yield put(actions.showAboutMessage(0));
  yield call(delay, 1000);
  yield put(actions.enterAboutMessage(1));
  yield call(delay, 600);
  yield put(actions.showAboutMessage(1));
  yield call(delay, 1000);
  yield put(actions.enterAboutMessage(2));
  yield call(delay, 600);
  yield put(actions.showAboutMessage(2));
  yield call(delay, 1000);
  yield put(actions.enterAboutMessage(3));
  yield call(delay, 600);
  yield put(actions.showAboutMessage(3));
}

export function* watchStartHello() {
  yield* takeLatest(actions.START_HELLO, startHello);
}

export function* watchStartAbout() {
  yield* takeLatest(actions.START_ABOUT, startAbout);
}

export default function* rootSaga() {
  yield [
    fork(watchStartHello),
    fork(watchStartAbout)
  ];
}
