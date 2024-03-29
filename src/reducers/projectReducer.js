import { combineReducers } from 'redux';

import {
  SECTION_PROJECT_LIST, SECTION_PROJECT_FIREFOX, SECTION_PROJECT_GAIA, SECTION_PROJECT_MARKETPLACE_APP,
  SECTION_PROJECT_MUZIK_LIST, SECTION_PROJECT_MUZIK_AIR, SECTION_PROJECT_MUZIK_ONLINE, SECTION_PROJECT_MUZIK_STUDY, SECTION_PROJECT_IMUSIC
} from '../actions';

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
      projects: [
        {
          content: 'Firefox'
        }, {
          content: 'Gaia'
        }, {
          content: 'Marketplace App'
        }
      ]
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
      content: `
        You can check out my contributions
        <a class="link" href="${FIREFOX_LINK}" title="${FIREFOX_LINK}" target="_blank">here</a>
      `,
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
      projects: [
        {
          image_url: 'home-app-640x360.png',
          content: 'Home App'
        }, {
          image_url: 'home-app-folder-navigation-640x360.png',
          content: 'Home App Folder Navigation'
        }, {
          image_url: 'home-app-create-folder-640x360.png',
          content: 'Home App Create Folder'
        }
      ]
    }, {
      type: 'server',
      content: 'I implemented new features on Home App and System App'
    }, {
      type: 'server',
      content: 'It\'s a really large code base with some <strong>browser specific APIs</strong>',
      has_html: true
    }, {
      type: 'server',
      content: `
        You can browse my contributions on
        <a class="link" href="${GAIA_LINK}" title="${GAIA_LINK}" target="_blank">GitHub</a>!
      `,
      has_html: true
    }
  ]
}, action) {
  return state;
}

const CES_LINK = 'https://blog.mozilla.org/blog/2016/01/05/firefox-os-will-power-new-panasonic-uhd-tvs-unveiled-at-ces/';
const MARKETPLACE_APP_LINK = 'https://github.com/mozilla-b2g/marketplace-tv-front-end';
const DEMO_LINK = 'https://drive.google.com/file/d/0B4K8q1qWmtAvZm1jRDZBUXh6cnc/preview';

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
      projects: [
        {
          image_url: 'marketplace-app-640x360.png',
          content: 'Marketplace App'
        }, {
          image_url: 'marketplace-app-action-menu-640x360.png',
          content: 'Marketplace App Action Menu'
        }, {
          image_url: 'marketplace-app-error-640x360.png',
          content: 'Marketplace App Error'
        }
      ]
    }, {
      type: 'server',
      content: 'This is my first project in Mozilla!'
    }, {
      type: 'server',
      content: `
        We actually built this in 2 months in order to make a demo in
        <strong>
          <a class="link" href="${CES_LINK}" title="${CES_LINK}" target="_blank">CES 2016</a>
        </strong>
      `,
      has_html: true
    }, {
      type: 'server',
      content: 'Here\'s a demo video'
    }, {
      type: 'server',
      content: DEMO_LINK,
      is_iframe: true
    }, {
      type: 'server',
      content: `
        Source code is available on
        <a class="link" href="${MARKETPLACE_APP_LINK}" title="${MARKETPLACE_APP_LINK}" target="_blank">GitHub</a>!
      `,
      has_html: true
    }
  ]
}, action) {
  return state;
}

const MUZIK_AIR_LINK = 'https://www.muzikair.com/';
const MUZIK_ONLINE_LINK = 'https://www.muzik-online.com/';

function projectMuzikList(state = {
  response: {
    type: 'client',
    content: 'Awesome! What else?'
  },
  messages: [
    {
      type: 'server',
      content: 'Well, I worked for <strong>MUZIK</strong> for 2.5 years before Mozilla',
      has_html: true
    }, {
      type: 'server',
      content: 'It\'s a <strong>startup</strong> focused on <strong>music streaming services</strong> and other related business',
      has_html: true
    }, {
      type: 'server',
      content: 'Here are some of the projects I made'
    }, {
      type: 'server',
      projects: [
        {
          link: MUZIK_AIR_LINK,
          content: 'MUZIK AIR'
        }, {
          link: MUZIK_ONLINE_LINK,
          content: 'MUZIK ONLINE'
        }, {
          content: 'MUZIK STUDY'
        }, {
          content: 'iMusic'
        }
      ]
    }, {
      type: 'server',
      content: 'Would you like to know any of them?'
    }
  ]
}, action) {
  return state;
}

function projectMuzikAir(state = {
  response: {
    type: 'client',
    content: 'Tell me more about MUZIK AIR',
    name: 'MUZIK AIR'
  },
  messages: [
    {
      type: 'server',
      content: 'MUZIK AIR is an on-demand classical music streaming service with <strong>scenario-oriented</strong> playlists',
      has_html: true
    }, {
      type: 'server',
      projects: [
        {
          image_url: 'muzik-air-640x313.png',
          content: 'MUZIK AIR'
        }
      ]
    }, {
      type: 'server',
      content: 'I developed each feature as <strong>reusable component</strong>',
      has_html: true
    }, {
      type: 'server',
      content: 'And managed workflow with <strong>Webpack</strong> and npm scripts',
      has_html: true
    }
  ]
}, action) {
  return state;
}

function projectMuzikOnline(state = {
  response: {
    type: 'client',
    content: 'Tell me more about MUZIK ONLINE',
    name: 'MUZIK ONLINE'
  },
  messages: [
    {
      type: 'server',
      content: 'MUZIK ONLINE is a classical music portal platform',
    }, {
      type: 'server',
      projects: [
        {
          image_url: 'muzik-online-640x313.png',
          content: 'MUZIK ONLINE'
        }
      ]
    }, {
      type: 'server',
      content: 'It\'s a <strong>single page application</strong> built with <strong>Backbone</strong> and <strong>Marionette</strong>',
      has_html: true
    }, {
      type: 'server',
      content: 'We solved the <strong>SEO</strong> problem in single page application with <strong>server-side rendering</strong>',
      has_html: true
    }, {
      type: 'server',
      content: 'That was even before Facebook introduced React!'
    }
  ]
}, action) {
  return state;
}

function projectMuzikStudy(state = {
  response: {
    type: 'client',
    content: 'Tell me more about MUZIK STUDY',
    name: 'MUZIK STUDY'
  },
  messages: [
    {
      type: 'server',
      content: 'MUZIK STUDY is a <strong>B2B</strong> classical music database service',
      has_html: true
    }, {
      type: 'server',
      projects: [
        {
          image_url: 'muzik-study-640x313.png',
          content: 'MUZIK STUDY'
        }
      ]
    }, {
      type: 'server',
      content: 'It\'s a single page application built with <strong>React</strong> and <strong>Flux</strong>',
      has_html: true
    }
  ]
}, action) {
  return state;
}

function projectIMusic(state = {
  response: {
    type: 'client',
    content: 'Tell me more about iMusic',
    name: 'iMusic'
  },
  messages: [
    {
      type: 'server',
      content: 'iMusic is a prototype of music streaming service with new business model'
    }, {
      type: 'server',
      projects: [
        {
          image_url: 'imusic-640x313.png',
          content: 'iMusic'
        }
      ]
    }, {
      type: 'server',
      content: 'We delivered this prototype in one month in order to make a demo to our investors'
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  projectList: createFilteredReducer(projectList, SECTION_PROJECT_LIST),
  projectFirefox: createFilteredReducer(projectFirefox, SECTION_PROJECT_FIREFOX),
  projectGaia: createFilteredReducer(projectGaia, SECTION_PROJECT_GAIA),
  projectMarketplaceApp: createFilteredReducer(projectMarketplaceApp, SECTION_PROJECT_MARKETPLACE_APP),
  projectMuzikList: createFilteredReducer(projectMuzikList, SECTION_PROJECT_MUZIK_LIST),
  projectMuzikAir: createFilteredReducer(projectMuzikAir, SECTION_PROJECT_MUZIK_AIR),
  projectMuzikOnline: createFilteredReducer(projectMuzikOnline, SECTION_PROJECT_MUZIK_ONLINE),
  projectMuzikStudy: createFilteredReducer(projectMuzikStudy, SECTION_PROJECT_MUZIK_STUDY),
  projectIMusic: createFilteredReducer(projectIMusic, SECTION_PROJECT_IMUSIC)
});
