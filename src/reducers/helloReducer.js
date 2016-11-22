import { combineReducers } from 'redux';

import { SECTION_HELLO } from '../actions';
import { createFilteredReducer } from './filterReducer';

function messages(state = [
  {
    type: 'server',
    content: 'Hi, it\'s good to see you!'
  }, {
    type: 'server',
    content: 'I\'m Joseph, what can I do for you?'
  }
], action) {
  return state;
}

function checkHelloSection(action) {
  return action.section === SECTION_HELLO;
}

export default combineReducers({
  messages: createFilteredReducer(messages, checkHelloSection)
});
