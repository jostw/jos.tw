import { TOGGLE_RESPONSE } from '../actions';

export default function response(state = {
  sections: [],
  is_visible: false
}, action) {
  switch(action.type) {
    case TOGGLE_RESPONSE:
      const isVisible = !!action.sections;

      return Object.assign({}, state, {
        sections: isVisible ? action.sections : state.sections,
        is_visible: isVisible
      });
    default:
      return state;
  }
}
