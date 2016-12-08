import { combineReducers } from 'redux';

import { SECTION_ABOUT_YOURSELF, SECTION_ABOUT_MORE } from '../actions';
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

const ABOUT_MORE_RESPONSE_INDEX = Math.floor(Math.random() * 3);

function aboutMore(state = {
  response: {
    type: 'client',
    content: 'Tell me more!'
  },
  messages: [
    {
      type: 'server',
      content: 'I\'m passionate for new techniques and also interest in <strong>visualization</strong> and <strong>design</strong>!',
      has_html: true
    }, {
      type: 'server',
      content: 'I\'ve deal with some <strong>internationalization</strong> and <strong>RTL</strong> support issues!',
      has_html: true
    }, {
      type: 'server',
      content: 'I have backgrounds of <strong>data science</strong> and <strong>art</strong>!',
      has_html: true
    }
  ].filter((message, index) => {
    return index === ABOUT_MORE_RESPONSE_INDEX;
  })
}, action) {
  return state;
}

export default combineReducers({
  aboutYourself: createFilteredReducer(aboutYourself, SECTION_ABOUT_YOURSELF),
  aboutMore: createFilteredReducer(aboutMore, SECTION_ABOUT_MORE)
});
