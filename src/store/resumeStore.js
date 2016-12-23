import { createStore } from 'redux';

import rootReducer from '../reducers/resume';

export default function resumeStore(preloadedState) {
  return createStore(rootReducer, preloadedState);
}
