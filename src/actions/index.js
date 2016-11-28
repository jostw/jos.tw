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

export const startHello = () => ({ type: START_HELLO });

export const SECTION_ABOUT_YOURSELF = 'SECTION_ABOUT_YOURSELF';
export const START_ABOUT_YOURSELF = 'START_ABOUT_YOURSELF';

export const startAboutYourself = () => ({ type: START_ABOUT_YOURSELF });

export const startSection = section => {
  switch (section) {
    case SECTION_HELLO:
      return startHello();
    case SECTION_ABOUT_YOURSELF:
      return startAboutYourself();
    default:
      return { type: null };
  }
};

export const TOGGLE_RESPONSE = 'TOGGLE_RESPONSE';

export const toggleResponse = (...sections) => ({ type: TOGGLE_RESPONSE, sections });
