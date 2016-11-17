import { combineReducers } from 'redux';

import { ENTER_ABOUT_MESSAGE, SHOW_ABOUT_MESSAGE } from '../actions';

function response(state = {
  type: 'client',
  content: 'Tell me about yourself!',
  is_typing: false,
  is_visible: true
}, action) {
  return state;
}

function messages(state = [
  Object.assign({}, response(), { is_visible: false }), {
    type: 'server',
    content: 'I\'m a <strong>Front End Developer</strong> from Taiwan',
    has_html: true,
    is_typing: false,
    is_visible: false
  }, {
    type: 'server',
    content: 'Having 4 years experience with solid <strong>JavaScript</strong> programming skills',
    has_html: true,
    is_typing: false,
    is_visible: false
  }, {
    type: 'server',
    content: 'and familiar with <strong>modern web frameworks</strong>',
    has_html: true,
    is_typing: false,
    is_visible: false
  }
], action) {
  switch(action.type) {
    case ENTER_ABOUT_MESSAGE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          is_typing: true
        }),
        ...state.slice(action.index + 1)
      ];
    case SHOW_ABOUT_MESSAGE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          is_typing: false,
          is_visible: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default combineReducers({ response, messages });
