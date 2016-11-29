import { combineReducers } from 'redux';

import { SECTION_PROJECT_LIST } from '../actions';
import { createFilteredReducer } from './filterReducer';

function projectList(state = {
  response: {
    type: 'client',
    content: 'Can you show me your work?'
  },
  messages: [
    {
      type: 'server',
      content: 'Sure, here are some of my works in Mozilla'
    }, {
      type: 'server',
      content: ['Firefox', 'Gaia', 'Marketplace App'],
      is_array: true
    }, {
      type: 'server',
      content: 'Which would you like to know?'
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  projectList: createFilteredReducer(projectList, action => action.section === SECTION_PROJECT_LIST)
});
