import { combineReducers } from 'redux';

import { SECTION_PROJECT_LIST, SECTION_PROJECT_FIREFOX, SECTION_PROJECT_GAIA } from '../actions';
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
      content: 'I\'ve been working on <strong>Preferences</strong> and <strong>DevTools</strong> in Firefox',
      has_html: true
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

const GAIA_LINK = 'https://github.com/mozilla-b2g/gaia/commits/v2.6?author=jostw';

function projectGaia(state = {
  response: {
    type: 'client',
    content: 'Tell me more about Gaia'
  },
  messages: [
    {
      type: 'server',
      content: 'Gaia is the user interface level of Firefox OS'
    }, {
      type: 'server',
      content: 'I\'ve implement new features on Home App and System App'
    }, {
      type: 'server',
      content: 'It\'s a really large code base with some browser specific APIs'
    }, {
      type: 'server',
      content: `You can browse my contributions <a class="link" href="${GAIA_LINK}" title="${GAIA_LINK}" target="_blank">here</a>`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  projectList: createFilteredReducer(projectList, action => action.section === SECTION_PROJECT_LIST),
  projectFirefox: createFilteredReducer(projectFirefox, action => action.section === SECTION_PROJECT_FIREFOX),
  projectGaia: createFilteredReducer(projectGaia, action => action.section === SECTION_PROJECT_GAIA)
});
