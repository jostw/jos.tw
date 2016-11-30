import { combineReducers } from 'redux';

import { SECTION_RESUME_LINK } from '../actions';
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
      content: `or download the PDF <a class="link" href="${RESUME_PDF_LINK}" title="${RESUME_PDF_LINK}" target="_blank">here</a>`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  resumeLink: createFilteredReducer(resumeLink, action => action.section === SECTION_RESUME_LINK)
});
