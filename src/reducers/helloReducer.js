import { combineReducers } from 'redux';

import { SECTION_HELLO } from '../actions';
import { createFilteredReducer } from './filterReducer';

function hello(state = {
  messages: [
    {
      type: 'server',
      content: 'Hi, it\'s good to see you!'
    }, {
      type: 'server',
      content: 'I\'m Joseph, what can I do for you?'
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  hello: createFilteredReducer(hello, action => action.section === SECTION_HELLO)
});
