import { combineReducers } from 'redux';

import { SECTION_ABOUT_YOURSELF } from '../actions';
import { createFilteredReducer } from './filterReducer';

function aboutYourself(state = {
  response: {
    type: 'client',
    content: 'Tell me about yourself!'
  },
  messages: [
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
      content: 'Also familiar with <strong>modern web frameworks</strong>',
      has_html: true
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  aboutYourself: createFilteredReducer(aboutYourself, action => action.section === SECTION_ABOUT_YOURSELF)
});
