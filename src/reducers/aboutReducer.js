import { combineReducers } from 'redux';

import { SECTION_ABOUT } from '../actions';
import { createFilteredReducer } from './filterReducer';

function response(state = {
  type: 'client',
  content: 'Tell me about yourself!',
  is_typing: false,
  is_visible: true
}, action) {
  return state;
}

function messages(state = [
  Object.assign({}, response(), { is_visible: false }), {
    type: 'server',
    content: 'I\'m a <strong>Front End Developer</strong> from Taiwan',
    has_html: true,
    is_typing: false,
    is_visible: false
  }, {
    type: 'server',
    content: 'Having 4 years experience with solid <strong>JavaScript</strong> programming skills',
    has_html: true,
    is_typing: false,
    is_visible: false
  }, {
    type: 'server',
    content: 'and familiar with <strong>modern web frameworks</strong>',
    has_html: true,
    is_typing: false,
    is_visible: false
  }
], action) {
  return state;
}

export default combineReducers({
  response,
  messages: createFilteredReducer(messages, action => action.section === SECTION_ABOUT)
});
