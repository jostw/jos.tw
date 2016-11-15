import { createStore } from 'redux';
import rootReducer from '../reducers';

let configureStore = preloadedState => createStore(rootReducer, preloadedState);

export default configureStore;
