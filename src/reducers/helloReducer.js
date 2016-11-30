import { combineReducers } from 'redux';

import { SECTION_HELLO_WORLD } from '../actions';
import { createFilteredReducer } from './filterReducer';

function helloWorld(state = {
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
  helloWorld: createFilteredReducer(helloWorld, action => action.section === SECTION_HELLO_WORLD)
});
