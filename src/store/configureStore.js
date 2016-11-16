import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = preloadedState => ({
  ...createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware, logger)),
  runSaga: sagaMiddleware.run
});

export default configureStore;
