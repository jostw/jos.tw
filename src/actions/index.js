export const ENTER_MESSAGE = 'ENTER_MESSAGE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const enterMessage = (section, index) => ({ type: ENTER_MESSAGE, section, index });
export const showMessage = (section, index) => ({ type: SHOW_MESSAGE, section, index });

export const SECTION_HELLO = 'SECTION_HELLO';
export const START_HELLO = 'START_HELLO';

export const startHello = () => ({ type: START_HELLO });

export const SECTION_ABOUT = 'SECTION_ABOUT';
export const START_ABOUT = 'START_ABOUT';

export const startAbout = () => ({ type: START_ABOUT });

export const startSection = section => {
  switch (section) {
    case SECTION_HELLO:
      return startHello();
    case SECTION_ABOUT:
      return startAbout();
    default:
      return { type: null };
  }
};

export const TOGGLE_RESPONSE = 'TOGGLE_RESPONSE';

export const toggleResponse = (...sections) => ({ type: TOGGLE_RESPONSE, sections });
