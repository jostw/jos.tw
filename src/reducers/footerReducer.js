import { TOGGLE_FOOTER } from '../actions';

export default function footer(state = {
  is_visible: false
}, action) {
  switch(action.type) {
    case TOGGLE_FOOTER:
      return {
        ...state,
        is_visible: action.isVisible
      };
    default:
      return state;
  }
}
