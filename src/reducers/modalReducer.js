import { TOGGLE_MODAL, SHOW_MODAL_IMAGE } from '../actions';

export default function modal(state = {
  is_visible: false,
  is_image_visible: false,
  name: null,
  image_url: null
}, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      if (action.name) {
        return {
          ...state,
          is_visible: true,
          is_image_visible: state.image_url === action.imageUrl,
          name: action.name,
          image_url: action.imageUrl
        };
      }

      return {
        ...state,
        is_visible: false,
        is_image_visible: false
      };
    case SHOW_MODAL_IMAGE:
      return {
        ...state,
        is_image_visible: true
      };
    default:
      return state;
  }
}
