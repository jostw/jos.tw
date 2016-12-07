import { takeLatest, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';

import * as actions from '../actions';

function* showResponse(section) {
  yield call(delay, 600);
  yield put(actions.showResponse(section));
}

function* showMessage(section, startIndex, size) {
  if (!size) {
    size = startIndex;
    startIndex = 0;
  }

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
    case actions.SECTION_PROJECT_MUZIK_LIST:
      yield startProjectMuzikList();
      break;
    case actions.SECTION_PROJECT_MUZIK_AIR:
      yield startProjectMuzikAir();
      break;
    case actions.SECTION_PROJECT_MUZIK_ONLINE:
      yield startProjectMuzikOnline();
      break;
    case actions.SECTION_PROJECT_MUZIK_STUDY:
      yield startProjectMuzikStudy();
      break;
    case actions.SECTION_PROJECT_IMUSIC:
      yield startProjectIMusic();
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
  yield showMessage(actions.SECTION_PROJECT_LIST, 2, 3);
  yield toggleResponse(actions.SECTION_PROJECT_FIREFOX, actions.SECTION_PROJECT_GAIA, actions.SECTION_PROJECT_MARKETPLACE_APP);
}

function* startProjectFirefox() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_FIREFOX);
  yield showMessage(actions.SECTION_PROJECT_FIREFOX, 4);
  yield toggleResponse(actions.SECTION_PROJECT_MUZIK_LIST, actions.SECTION_RESUME_LINK);
}

function* startProjectGaia() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_GAIA);
  yield showMessage(actions.SECTION_PROJECT_GAIA, 5);
  yield toggleResponse(actions.SECTION_PROJECT_MUZIK_LIST, actions.SECTION_RESUME_LINK);
}

function* startProjectMarketplaceApp() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_MARKETPLACE_APP);
  yield showMessage(actions.SECTION_PROJECT_MARKETPLACE_APP, 7);
  yield toggleResponse(actions.SECTION_PROJECT_MUZIK_LIST, actions.SECTION_RESUME_LINK);
}

function* startProjectMuzikList() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_MUZIK_LIST);
  yield showMessage(actions.SECTION_PROJECT_MUZIK_LIST, 4);
  yield call(delay, 500);
  yield showMessage(actions.SECTION_PROJECT_MUZIK_LIST, 4, 5);
  yield toggleResponse(actions.SECTION_PROJECT_MUZIK_AIR, actions.SECTION_PROJECT_MUZIK_ONLINE, actions.SECTION_PROJECT_MUZIK_STUDY, actions.SECTION_PROJECT_IMUSIC);
}

function* startProjectMuzikAir() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_MUZIK_AIR);
  yield showMessage(actions.SECTION_PROJECT_MUZIK_AIR, 4);
  yield toggleResponse(actions.SECTION_RESUME_LINK, actions.SECTION_CONTACT_MAIL);
}

function* startProjectMuzikOnline() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_MUZIK_ONLINE);
  yield showMessage(actions.SECTION_PROJECT_MUZIK_ONLINE, 5);
  yield toggleResponse(actions.SECTION_RESUME_LINK, actions.SECTION_CONTACT_MAIL);
}

function* startProjectMuzikStudy() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_MUZIK_STUDY);
  yield showMessage(actions.SECTION_PROJECT_MUZIK_STUDY, 3);
  yield toggleResponse(actions.SECTION_RESUME_LINK, actions.SECTION_CONTACT_MAIL);
}

function* startProjectIMusic() {
  yield toggleResponse(false);
  yield showResponse(actions.SECTION_PROJECT_IMUSIC);
  yield showMessage(actions.SECTION_PROJECT_IMUSIC, 3);
  yield toggleResponse(actions.SECTION_RESUME_LINK, actions.SECTION_CONTACT_MAIL);
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
  yield showMessage(actions.SECTION_CONTACT_MAIL, 3);
}

function* watchStartSection() {
  yield* takeLatest(actions.START_SECTION, startSection);
}

export default function* rootSaga() {
  yield fork(watchStartSection);
}
