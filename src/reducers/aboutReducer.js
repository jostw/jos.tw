import { combineReducers } from 'redux';

import { SECTION_ABOUT } from '../actions';
import { createFilteredReducer } from './filterReducer';

function response(state = {
  type: 'client',
  content: 'Tell me about yourself!'
}, action) {
  return state;
}

function messages(state = [
  {
    type: 'server',
    content: 'I\'m a <strong>Front End Developer</strong> from Taiwan',
    has_html: true
  }, {
    type: 'server',
    content: 'Having 4 years experience with solid <strong>JavaScript</strong> programming skills',
    has_html: true
  }, {
    type: 'server',
    content: 'and familiar with <strong>modern web frameworks</strong>',
    has_html: true
  }
], action) {
  return state;
}

function checkAboutSection(action) {
  return action.section === SECTION_ABOUT;
}

export default combineReducers({
  response: createFilteredReducer(response, checkAboutSection),
  messages: createFilteredReducer(messages, checkAboutSection)
});
