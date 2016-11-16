import { SHOW_HELLO_MESSAGE } from '../actions';

const messageList = [
  {
    type: 'server',
    content: 'Hi, it\'s good to see you!',
    is_typing: true
  }, {
    type: 'server',
    content: 'I\'m Joseph, what can I do for you?',
    is_typing: true
  }
];

export function messages(state = [], action) {
  switch(action.type) {
    case SHOW_HELLO_MESSAGE:
      messageList[action.index].is_typing = false;
      break;
    default:
      break;
  }

  return messageList;
}
