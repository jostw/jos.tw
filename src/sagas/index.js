import { takeLatest, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';

import * as actions from '../actions';

function* startHello() {
  yield call(delay, 1000);
  yield put(actions.enterMessage(actions.SECTION_HELLO, 0));
  yield call(delay, 600);
  yield put(actions.showMessage(actions.SECTION_HELLO, 0));
  yield call(delay, 1000);
  yield put(actions.enterMessage(actions.SECTION_HELLO, 1));
  yield call(delay, 600);
  yield put(actions.showMessage(actions.SECTION_HELLO, 1));

  yield call(delay, 1000);
  yield put(actions.toggleResponse(actions.SECTION_ABOUT));
}

function* startAbout() {
  yield put(actions.toggleResponse(false));

  yield call(delay, 600);
  yield put(actions.showResponse(actions.SECTION_ABOUT));
  yield call(delay, 1000);
  yield put(actions.enterMessage(actions.SECTION_ABOUT, 0));
  yield call(delay, 600);
  yield put(actions.showMessage(actions.SECTION_ABOUT, 0));
  yield call(delay, 1000);
  yield put(actions.enterMessage(actions.SECTION_ABOUT, 1));
  yield call(delay, 600);
  yield put(actions.showMessage(actions.SECTION_ABOUT, 1));
  yield call(delay, 1000);
  yield put(actions.enterMessage(actions.SECTION_ABOUT, 2));
  yield call(delay, 600);
  yield put(actions.showMessage(actions.SECTION_ABOUT, 2));
}

function* watchStartHello() {
  yield* takeLatest(actions.START_HELLO, startHello);
}

function* watchStartAbout() {
  yield* takeLatest(actions.START_ABOUT, startAbout);
}

export default function* rootSaga() {
  yield [
    fork(watchStartHello),
    fork(watchStartAbout)
  ];
}
