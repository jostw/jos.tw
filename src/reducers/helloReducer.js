import { ENTER_HELLO_MESSAGE, SHOW_HELLO_MESSAGE } from '../actions';

export function messages(state = [
  {
    type: 'server',
    content: 'Hi, it\'s good to see you!',
    is_typing: false,
    is_visible: false
  }, {
    type: 'server',
    content: 'I\'m Joseph, what can I do for you?',
    is_typing: false,
    is_visible: false
  }
], action) {
  switch(action.type) {
    case ENTER_HELLO_MESSAGE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          is_typing: true
        }),
        ...state.slice(action.index + 1)
      ];
    case SHOW_HELLO_MESSAGE:
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
