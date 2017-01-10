import { SECTION_ABOUT_YOURSELF, SECTION_PROJECT_LIST, TOGGLE_RESPONSE } from '../actions';

export default function response(state = {
  sections: [SECTION_ABOUT_YOURSELF, SECTION_PROJECT_LIST],
  is_visible: false
}, action) {
  switch (action.type) {
    case TOGGLE_RESPONSE:
      const isVisible = !!action.sections;

      return {
        ...state,
        sections: isVisible ? action.sections : state.sections,
        is_visible: isVisible
      };
    default:
      return state;
  }
}
