import { combineReducers } from 'redux';

import { SECTION_PROJECT_LIST, SECTION_PROJECT_FIREFOX } from '../actions';
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

const FIREFOX_LINK = 'https://hg.mozilla.org/mozilla-central/log?rev=jyeh@mozilla.com';

function projectFirefox(state = {
  response: {
    type: 'client',
    content: 'Cool! I\'d like to know more about Firefox'
  },
  messages: [
    {
      type: 'server',
      content: 'I\'ve been working on Preferences and DevTools in Firefox'
    }, {
      type: 'server',
      content: 'Basically all of my works in Mozilla are open source'
    }, {
      type: 'server',
      content: `You can check out my contributions <a class="link" href="${FIREFOX_LINK}" title="${FIREFOX_LINK}" target="_blank">here</a>`,
      has_html: true
    }, {
      type: 'server',
      content: 'Every commit is listed and you can also check the bug refers to it!'
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  projectList: createFilteredReducer(projectList, action => action.section === SECTION_PROJECT_LIST),
  projectFirefox: createFilteredReducer(projectFirefox, action => action.section === SECTION_PROJECT_FIREFOX)
});
