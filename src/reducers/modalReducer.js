import { TOGGLE_MODAL, SHOW_MODAL_IMAGE } from '../actions';

export default function modal(state = {
  is_visible: false,
  is_image_visible: false,
  image: {
    name: null,
    url: null
  }
}, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      if (action.imageName) {
        return {
          ...state,
          is_visible: true,
          is_image_visible: state.image.url === action.imageUrl,
          image: {
            name: action.imageName,
            url: action.imageUrl
          }
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
