export const ENTER_RESPONSE = 'ENTER_RESPONSE';
export const SHOW_RESPONSE = 'SHOW_RESPONSE';

export const enterResponse = section => ({ type: ENTER_RESPONSE, section });
export const showResponse = section => ({ type: SHOW_RESPONSE, section });

export const ENTER_MESSAGE = 'ENTER_MESSAGE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const enterMessage = (section, index) => ({ type: ENTER_MESSAGE, section, index });
export const showMessage = (section, index) => ({ type: SHOW_MESSAGE, section, index });

export const SECTION_HELLO = 'SECTION_HELLO';
export const START_HELLO = 'START_HELLO';

export const SECTION_ABOUT_YOURSELF = 'SECTION_ABOUT_YOURSELF';
export const START_ABOUT_YOURSELF = 'START_ABOUT_YOURSELF';

export const SECTION_PROJECT_LIST = 'SECTION_PROJECT_LIST';
export const START_PROJECT_LIST = 'START_PROJECT_LIST';

export const SECTION_PROJECT_FIREFOX = 'SECTION_PROJECT_FIREFOX';
export const START_PROJECT_FIREFOX = 'START_PROJECT_FIREFOX';

export const startSection = section => {
  switch (section) {
    case SECTION_HELLO:
      return { type: START_HELLO };
    case SECTION_ABOUT_YOURSELF:
      return { type: START_ABOUT_YOURSELF };
    case SECTION_PROJECT_LIST:
      return { type: START_PROJECT_LIST };
    case SECTION_PROJECT_FIREFOX:
      return { type: START_PROJECT_FIREFOX };
    default:
      return { type: null };
  }
};

export const startHello = () => startSection(SECTION_HELLO);

export const TOGGLE_RESPONSE = 'TOGGLE_RESPONSE';

export const toggleResponse = sections => ({ type: TOGGLE_RESPONSE, sections });
