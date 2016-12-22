import { combineReducers } from 'redux';

import { SECTION_CONTACT_MAIL, SECTION_CONTACT_GOODBYE } from '../actions';
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
      content: `
        Just send email to
        <a class="link" href="mailto:${CONTACT_EMAIL}" title="${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
      `,
      has_html: true
    }, {
      type: 'server',
      content: 'I\'m looking forward to get in touch with you!'
    }, {
      type: 'server',
      content: 'See you!'
    }
  ]
}, action) {
  return state;
}

function contactGoodbye(state = {
  response: {
    type: 'client',
    content: 'Good luck!'
  },
  messages: [
    {
      type: 'server',
      content: 'Thanks! Have a nice day :)'
    }
  ]
}, action) {
  return state;
}

export default combineReducers({
  contactMail: createFilteredReducer(contactMail, SECTION_CONTACT_MAIL),
  contactGoodbye: createFilteredReducer(contactGoodbye, SECTION_CONTACT_GOODBYE)
});
