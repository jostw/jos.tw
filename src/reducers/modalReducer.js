import { TOGGLE_MODAL } from '../actions';

export default function modal(state = {
  is_visible: false,
  name: null,
  image_url: null
}, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      if (action.name) {
        return {
          ...state,
          is_visible: true,
          name: action.name,
          image_url: action.imageUrl
        };
      }

      return {
        ...state,
        is_visible: false
      };
    default:
      return state;
  }
}
