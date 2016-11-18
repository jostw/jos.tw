import { combineReducers } from 'redux';

import { SECTION_HELLO } from '../actions';
import { createFilteredReducer } from './filterReducer';

function messages(state = [
  {
    type: 'server',
    content: 'Hi, it\'s good to see you!',
    is_typing: false,
    is_visible: false
  }, {
    type: 'server',
    content: 'I\'m Joseph, what can I do for you?',
    is_typing: false,
    is_visible: false
  }
], action) {
  return state;
}

export default combineReducers({
  messages: createFilteredReducer(messages, action => action.section === SECTION_HELLO)
});
