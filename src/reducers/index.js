import { combineReducers } from 'redux';

import hello from './helloReducer';
import about from './aboutReducer';
import project from './projectReducer';
import resume from './resumeReducer';
import contact from './contactReducer';
import response from './responseReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({ hello, about, project, resume, contact, response, modal });

export default rootReducer;
