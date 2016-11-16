import { ENTER_HELLO_MESSAGE, SHOW_HELLO_MESSAGE } from '../actions';

const messageList = [
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
];

export function messages(state = [], action) {
  switch(action.type) {
    case ENTER_HELLO_MESSAGE:
      messageList[action.index].is_typing = true;
      break;
    case SHOW_HELLO_MESSAGE:
      messageList[action.index].is_typing = false;
      messageList[action.index].is_visible = true;
      break;
    default:
      break;
  }

  return messageList;
}
