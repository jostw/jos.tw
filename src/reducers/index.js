import { combineReducers } from 'redux';

import hello from './helloReducer';
import about from './aboutReducer';
import project from './projectReducer';
import response from './responseReducer';

const rootReducer = combineReducers({ hello, about, project, response });

export default rootReducer;
