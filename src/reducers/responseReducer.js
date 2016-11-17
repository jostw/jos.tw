import { TOGGLE_RESPONSE } from '../actions';

export default function response(state = {
  is_visible: false
}, action) {
  switch(action.type) {
    case TOGGLE_RESPONSE:
      return Object.assign({}, state, {
        is_visible: action.is_visible
      });
    default:
      return state;
  }
}
