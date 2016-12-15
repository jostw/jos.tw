import { combineReducers } from 'redux';

import app from './appReducer';
import hello from './helloReducer';
import about from './aboutReducer';
import project from './projectReducer';
import resume from './resumeReducer';
import contact from './contactReducer';
import response from './responseReducer';
import footer from './footerReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({ app, hello, about, project, resume, contact, response, footer, modal });

export default rootReducer;
