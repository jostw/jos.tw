import { takeLatest, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';

import * as actions from '../actions';

function* showResponse(section) {
  yield call(delay, 600);
  yield put(actions.showResponse(section));
}

function* showMessage(section, size) {
  for (let index = 0; index < size; index++) {
    yield call(delay, 1000);
    yield put(actions.enterMessage(section, index));
    yield call(delay, 600);
    yield put(actions.showMessage(section, index));
  }
}

function* toggleResponse(...sections) {
  if (sections.includes(false)) {
    yield put(actions.toggleResponse(false));
    return;
  }

  yield call(delay, 1000);
  yield put(actions.toggleResponse(sections));
}

function* startSection(action) {
  switch (action.section) {
    case actions.SECTION_HELLO:
      yield startHello();
      break;
    case actions.SECTION_ABOUT_YOURSELF:
      yield startAboutYourself();
      break;
    case actions.SECTION_PROJECT_LIST:
      yield startProjectList();
      break;
    case actions.SECTION_PROJECT_FIREFOX:
      yield startProjectFirefox();
      break;
    default:
      break;
  }
}

function* startHello() {
  yield showMessage(actions.SECTION_HELLO, 2);
  yield toggleResponse(actions.SECTION_ABOUT_YOURSELF, actions.SECTION_PROJECT_LIST);
}

function* startAboutYourself() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_ABOUT_YOURSELF);
  yield showMessage(actions.SECTION_ABOUT_YOURSELF, 3);
  yield toggleResponse(actions.SECTION_PROJECT_LIST);
}

function* startProjectList() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_LIST);
  yield showMessage(actions.SECTION_PROJECT_LIST, 3);
  yield toggleResponse(actions.SECTION_PROJECT_FIREFOX);
}

function* startProjectFirefox() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_FIREFOX);
  yield showMessage(actions.SECTION_PROJECT_FIREFOX, 4);
}

function* watchStartSection() {
  yield* takeLatest(actions.START_SECTION, startSection);
}

export default function* rootSaga() {
  yield fork(watchStartSection);
}
