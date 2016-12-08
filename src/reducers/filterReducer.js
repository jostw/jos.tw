import { ENTER_RESPONSE, SHOW_RESPONSE, ENTER_MESSAGE, SHOW_MESSAGE } from '../actions';

function enterMessage(message) {
  return {
    ...message,
    is_typing: true
  };
}

function showMessage(message) {
  return {
    ...message,
    is_typing: false,
    is_visible: true
  };
}

function responseFilter(state, action) {
  switch (action.type) {
    case ENTER_RESPONSE:
      return enterMessage(state);
    case SHOW_RESPONSE:
      return showMessage(state);
    default:
      return state;
  }
}

function messagesFilter(state, action) {
  switch (action.type) {
    case ENTER_MESSAGE:
      return [
        ...state.slice(0, action.index),
        enterMessage(state[action.index]),
        ...state.slice(action.index + 1)
      ];
    case SHOW_MESSAGE:
      return [
        ...state.slice(0, action.index),
        showMessage(state[action.index]),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export function createFilteredReducer(reducerFunction, section) {
  return (state = reducerFunction(), action) => {
    const shouldRunWrappedReducer = action.section === section;

    if (!shouldRunWrappedReducer) {
      return state;
    }

    const nextState = reducerFunction(state, action);

    return {
      ...nextState.response ? { response: responseFilter(nextState.response, action) } : {},
      messages: messagesFilter(nextState.messages, action)
    };
  }
}
