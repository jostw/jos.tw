import { ENTER_MESSAGE, SHOW_MESSAGE } from '../actions';

function messagesFilter(state, action) {
  switch (action.type) {
    case ENTER_MESSAGE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          is_typing: true
        }),
        ...state.slice(action.index + 1)
      ];
    case SHOW_MESSAGE:
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

export function createFilteredReducer(reducerFunction, reducerPredicate) {
  return (state = reducerFunction(), action) => {
    const shouldRunWrappedReducer = reducerPredicate(action);
    return shouldRunWrappedReducer ? messagesFilter(state, action) : state;
  }
}
