import { takeLatest, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';

import * as actions from '../actions';

function* showResponse(section) {
  yield call(delay, 600);
  yield put(actions.showResponse(section));
}

function* showMessage(section, size, startIndex = 0) {
  for (let index = startIndex; index < size; index++) {
    yield call(delay, 1300);
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

  yield call(delay, 1600);
  yield put(actions.toggleResponse(sections));
}

function* startSection(action) {
  switch (action.section) {
    case actions.SECTION_HELLO_WORLD:
      yield startHelloWorld();
      break;
    case actions.SECTION_ABOUT_YOURSELF:
      yield startAboutYourself();
      break;
    case actions.SECTION_ABOUT_MORE:
      yield startAboutMore();
      break;
    case actions.SECTION_PROJECT_LIST:
      yield startProjectList();
      break;
    case actions.SECTION_PROJECT_FIREFOX:
      yield startProjectFirefox();
      break;
    case actions.SECTION_PROJECT_GAIA:
      yield startProjectGaia();
      break;
    case actions.SECTION_PROJECT_MARKETPLACE_APP:
      yield startProjectMarketplaceApp();
      break;
    case actions.SECTION_RESUME_LINK:
      yield startResumeLink();
      break;
    case actions.SECTION_RESUME_MORE:
      yield startResumeMore();
      break;
    case actions.SECTION_CONTACT_MAIL:
      yield startContactMail();
      break;
    default:
      break;
  }
}

function* startHelloWorld() {
  yield showMessage(actions.SECTION_HELLO_WORLD, 2);
  yield toggleResponse(actions.SECTION_ABOUT_YOURSELF, actions.SECTION_PROJECT_LIST);
}

function* startAboutYourself() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_ABOUT_YOURSELF);
  yield showMessage(actions.SECTION_ABOUT_YOURSELF, 3);
  yield toggleResponse(actions.SECTION_ABOUT_MORE, actions.SECTION_PROJECT_LIST);
}

function* startAboutMore() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_ABOUT_MORE);
  yield showMessage(actions.SECTION_ABOUT_MORE, 1);
  yield toggleResponse(actions.SECTION_PROJECT_LIST, actions.SECTION_RESUME_LINK);
}

function* startProjectList() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_LIST);
  yield showMessage(actions.SECTION_PROJECT_LIST, 2);
  yield call(delay, 500);
  yield showMessage(actions.SECTION_PROJECT_LIST, 3, 2);
  yield toggleResponse(actions.SECTION_PROJECT_FIREFOX, actions.SECTION_PROJECT_GAIA, actions.SECTION_PROJECT_MARKETPLACE_APP);
}

function* startProjectFirefox() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_FIREFOX);
  yield showMessage(actions.SECTION_PROJECT_FIREFOX, 4);
  yield toggleResponse(actions.SECTION_RESUME_LINK);
}

function* startProjectGaia() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_GAIA);
  yield showMessage(actions.SECTION_PROJECT_GAIA, 5);
  yield toggleResponse(actions.SECTION_RESUME_LINK);
}

function* startProjectMarketplaceApp() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_MARKETPLACE_APP);
  yield showMessage(actions.SECTION_PROJECT_MARKETPLACE_APP, 7);
  yield toggleResponse(actions.SECTION_RESUME_LINK);
}

function* startResumeLink() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_RESUME_LINK);
  yield showMessage(actions.SECTION_RESUME_LINK, 2);
  yield toggleResponse(actions.SECTION_RESUME_MORE, actions.SECTION_CONTACT_MAIL);
}

function* startResumeMore() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_RESUME_MORE);
  yield showMessage(actions.SECTION_RESUME_MORE, 1);
  yield toggleResponse(actions.SECTION_CONTACT_MAIL);
}

function* startContactMail() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_CONTACT_MAIL);
  yield showMessage(actions.SECTION_CONTACT_MAIL, 2);
}

function* watchStartSection() {
  yield* takeLatest(actions.START_SECTION, startSection);
}

export default function* rootSaga() {
  yield fork(watchStartSection);
}
