import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

let configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(logger)
);

export default configureStore;
