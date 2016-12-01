import { combineReducers } from 'redux';

import { SECTION_CONTACT_MAIL } from '../actions';
import { createFilteredReducer } from './filterReducer';

const CONTACT_EMAIL = 'mail@jos.tw';

function contactMail(state = {
  response: {
    type: 'client',
    content: 'How can I contact you?'
  },
  messages: [
    {
      type: 'server',
      content: `Well, you can send email to <a class="link" href="mailto:${CONTACT_EMAIL}" title="${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
      has_html: true
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  contactMail: createFilteredReducer(contactMail, action => action.section === SECTION_CONTACT_MAIL)
});