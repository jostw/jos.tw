import { combineReducers } from 'redux';

import { SECTION_RESUME_LINK, SECTION_RESUME_MORE } from '../actions';
import { createFilteredReducer } from './filterReducer';

const RESUME_LINK = 'http://jos.tw/resume/';
const RESUME_PDF_LINK = 'http://jos.tw/resume.pdf';

function resumeLink(state = {
  response: {
    type: 'client',
    content: 'I\'d like to see your resume'
  },
  messages: [
    {
      type: 'server',
      content: `You can visit it at <a class="link" href="${RESUME_LINK}" title="${RESUME_LINK}" target="_blank">${RESUME_LINK}</a>`,
      has_html: true
    }, {
      type: 'server',
      content: `or download the <a class="link" href="${RESUME_PDF_LINK}" title="${RESUME_PDF_LINK}" target="_blank">PDF</a>`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

const LINKEDIN_LINK = 'https://www.linkedin.com/in/josyeh';
const GITHUB_LINK = 'https://github.com/jostw';

function resumeMore(state = {
  response: {
    type: 'client',
    content: 'I still like to know more'
  },
  messages: [
    {
      type: 'server',
      content: `Maybe my <a class="link" href="${LINKEDIN_LINK}" title="LinkedIn" target="_blank">LinkedIn</a> or <a class="link" href="${GITHUB_LINK}" title="GitHub" target="_blank">GitHub</a> will tell you more!`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  resumeLink: createFilteredReducer(resumeLink, action => action.section === SECTION_RESUME_LINK),
  resumeMore: createFilteredReducer(resumeMore, action => action.section === SECTION_RESUME_MORE)
});
