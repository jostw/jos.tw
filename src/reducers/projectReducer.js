import { combineReducers } from 'redux';

import { SECTION_PROJECT_LIST, SECTION_PROJECT_FIREFOX, SECTION_PROJECT_GAIA, SECTION_PROJECT_MARKETPLACE_APP } from '../actions';
import { createFilteredReducer } from './filterReducer';

function projectList(state = {
  response: {
    type: 'client',
    content: 'Can you show me your work?'
  },
  messages: [
    {
      type: 'server',
      content: 'Sure, here are some of my works in <strong>Mozilla</strong>',
      has_html: true
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
    content: 'Cool! I\'d like to know more about Firefox',
    name: 'Firefox'
  },
  messages: [
    {
      type: 'server',
      content: 'I\'ve been working on <strong>Preferences</strong> and <strong>DevTools</strong> in Firefox',
      has_html: true
    }, {
      type: 'server',
      content: 'Basically all of my works in Mozilla are <strong>open source</strong>',
      has_html: true
    }, {
      type: 'server',
      content: `You can check out my contributions <a class="link" href="${FIREFOX_LINK}" title="${FIREFOX_LINK}" target="_blank">here</a>`,
      has_html: true
    }, {
      type: 'server',
      content: 'Every commit is listed and you can also see the bug refers to it!'
    }
  ]
}, action) {
  return state;
}

const GAIA_LINK = 'https://github.com/mozilla-b2g/gaia/commits/v2.6?author=jostw';

function projectGaia(state = {
  response: {
    type: 'client',
    content: 'Cool! I\'d like to know more about Gaia',
    name: 'Gaia'
  },
  messages: [
    {
      type: 'server',
      content: 'Gaia is the user interface level of <strong>Firefox OS</strong>',
      has_html: true
    }, {
      type: 'server',
      content: [
        {
          name: 'Home App',
          image_url: 'img/gaia/home-app.png'
        }, {
          name: 'Home App Folder Navigation',
          image_url: 'img/gaia/home-app-folder-navigation.png'
        }, {
          name: 'Home App Create Folder',
          image_url: 'img/gaia/home-app-create-folder.png'
        }
      ],
      is_array: true,
      is_image_array: true
    }, {
      type: 'server',
      content: 'I\'ve implemented new features on Home App and System App'
    }, {
      type: 'server',
      content: 'It\'s a really large code base with some browser specific APIs'
    }, {
      type: 'server',
      content: `You can browse my contributions on <a class="link" href="${GAIA_LINK}" title="${GAIA_LINK}" target="_blank">GitHub</a>!`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

const CES_LINK = 'https://blog.mozilla.org/blog/2016/01/05/firefox-os-will-power-new-panasonic-uhd-tvs-unveiled-at-ces/';
const MARKETPLACE_APP_LINK = 'https://github.com/mozilla-b2g/marketplace-tv-front-end';

function projectMarketplaceApp(state = {
  response: {
    type: 'client',
    content: 'Cool! I\'d like to know more about Marketplace App',
    name: 'Marketplace App'
  },
  messages: [
    {
      type: 'server',
      content: 'It\'s also known as <strong>Web Apps</strong> discovery portal for Firefox OS TV',
      has_html: true
    }, {
      type: 'server',
      content: [
        {
          name: 'Marketplace App',
          image_url: 'img/marketplace-app/marketplace-app.png'
        }, {
          name: 'Marketplace App Action Menu',
          image_url: 'img/marketplace-app/marketplace-app-action-menu.png'
        }, {
          name: 'Marketplace App Error',
          image_url: 'img/marketplace-app/marketplace-app-error.png'
        }
      ],
      is_array: true,
      is_image_array: true
    }, {
      type: 'server',
      content: 'This is my first project in Mozilla!'
    }, {
      type: 'server',
      content: `We actually build this in 2 months in order to make a demo in <a class="link" href="${CES_LINK}" title="${CES_LINK}" target="_blank">CES 2016</a>`,
      has_html: true
    }, {
      type: 'server',
      content: 'Here\'s a demo video'
    }, {
      type: 'server',
      content: 'https://drive.google.com/file/d/0B4K8q1qWmtAvZm1jRDZBUXh6cnc/preview',
      is_iframe: true
    }, {
      type: 'server',
      content: `Source code is available on <a class="link" href="${MARKETPLACE_APP_LINK}" title="${MARKETPLACE_APP_LINK}" target="_blank">GitHub</a>!`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  projectList: createFilteredReducer(projectList, action => action.section === SECTION_PROJECT_LIST),
  projectFirefox: createFilteredReducer(projectFirefox, action => action.section === SECTION_PROJECT_FIREFOX),
  projectGaia: createFilteredReducer(projectGaia, action => action.section === SECTION_PROJECT_GAIA),
  projectMarketplaceApp: createFilteredReducer(projectMarketplaceApp, action => action.section === SECTION_PROJECT_MARKETPLACE_APP)
});
