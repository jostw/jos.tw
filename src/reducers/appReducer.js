import { TOGGLE_SCROLLING } from '../actions';

export default function app(state = {
  is_scrolling: false
}, action) {
  switch (action.type) {
    case TOGGLE_SCROLLING:
      return {
        ...state,
        is_scrolling: action.isScrolling
      };
    default:
      return state;
  }
}
