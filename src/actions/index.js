export const ENTER_RESPONSE = 'ENTER_RESPONSE';
export const SHOW_RESPONSE = 'SHOW_RESPONSE';

export const enterResponse = section => ({ type: ENTER_RESPONSE, section });
export const showResponse = section => ({ type: SHOW_RESPONSE, section });

export const ENTER_MESSAGE = 'ENTER_MESSAGE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const enterMessage = (section, index) => ({ type: ENTER_MESSAGE, section, index });
export const showMessage = (section, index) => ({ type: SHOW_MESSAGE, section, index });

export const START_SECTION = 'START_SECTION';

export const SECTION_HELLO_WORLD = 'SECTION_HELLO_WORLD';
export const SECTION_HELLO_AGAIN = 'SECTION_HELLO_AGAIN';
export const SECTION_ABOUT_YOURSELF = 'SECTION_ABOUT_YOURSELF';
export const SECTION_ABOUT_MORE = 'SECTION_ABOUT_MORE';
export const SECTION_PROJECT_LIST = 'SECTION_PROJECT_LIST';
export const SECTION_PROJECT_FIREFOX = 'SECTION_PROJECT_FIREFOX';
export const SECTION_PROJECT_GAIA = 'SECTION_PROJECT_GAIA';
export const SECTION_PROJECT_MARKETPLACE_APP = 'SECTION_PROJECT_MARKETPLACE_APP';
export const SECTION_PROJECT_MUZIK_LIST = 'SECTION_PROJECT_MUZIK_LIST';
export const SECTION_PROJECT_MUZIK_AIR = 'SECTION_PROJECT_MUZIK_AIR';
export const SECTION_PROJECT_MUZIK_ONLINE = 'SECTION_PROJECT_MUZIK_ONLINE';
export const SECTION_PROJECT_MUZIK_STUDY = 'SECTION_PROJECT_MUZIK_STUDY';
export const SECTION_PROJECT_IMUSIC = 'SECTION_PROJECT_IMUSIC';
export const SECTION_RESUME_LINK = 'SECTION_RESUME_LINK';
export const SECTION_RESUME_MORE = 'SECTION_RESUME_MORE';
export const SECTION_CONTACT_MAIL = 'SECTION_CONTACT_MAIL';
export const SECTION_CONTACT_GOODBYE = 'SECTION_CONTACT_GOODBYE';

export const startSection = section => {
  const type = START_SECTION;

  if (section) {
    return { type, section };
  }

  const hasVisited = document.cookie.replace(/(?:(?:^|.*;\s*)has_visited\s*=\s*([^;]*).*$)|^.*$/, '$1') === 'true';

  if (hasVisited) {
    return { type, section: SECTION_HELLO_AGAIN };
  }

  document.cookie = 'has_visited=true';

  return { type, section: SECTION_HELLO_WORLD };
};

export const TOGGLE_SCROLLING = 'TOGGLE_SCROLLING';
export const TOGGLE_RESPONSE = 'TOGGLE_RESPONSE';
export const TOGGLE_FOOTER = 'TOGGLE_FOOTER';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SHOW_MODAL_IMAGE = 'SHOW_MODAL_IMAGE';

export const toggleScrolling = isScrolling => ({ type: TOGGLE_SCROLLING, isScrolling });
export const toggleResponse = sections => ({ type: TOGGLE_RESPONSE, sections });
export const toggleFooter = isVisible => ({ type: TOGGLE_FOOTER, isVisible });
export const toggleModal = (imageName, imageUrl) => ({ type: TOGGLE_MODAL, imageName, imageUrl });
export const showModalImage = () => ({ type: SHOW_MODAL_IMAGE });
