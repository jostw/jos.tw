import { combineReducers } from 'redux';

import { TOGGLE_SCROLLING } from '../actions';

import hello from './helloReducer';
import about from './aboutReducer';
import project from './projectReducer';
import resume from './resumeReducer';
import contact from './contactReducer';
import response from './responseReducer';
import modal from './modalReducer';

function app(state = {
  is_scrolling: false
}, action) {
  switch (action.type) {
    case TOGGLE_SCROLLING:
      return {
        ...state,
        is_scrolling: action.isScrolling
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ app, hello, about, project, resume, contact, response, modal });

export default rootReducer;
