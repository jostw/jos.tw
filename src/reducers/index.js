import { combineReducers } from 'redux';

import hello from './helloReducer';
import about from './aboutReducer';
import response from './responseReducer';

const rootReducer = combineReducers({ hello, about, response });

export default rootReducer;
