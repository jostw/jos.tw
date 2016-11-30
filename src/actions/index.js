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
export const SECTION_ABOUT_YOURSELF = 'SECTION_ABOUT_YOURSELF';
export const SECTION_PROJECT_LIST = 'SECTION_PROJECT_LIST';
export const SECTION_PROJECT_FIREFOX = 'SECTION_PROJECT_FIREFOX';
export const SECTION_RESUME_LINK = 'SECTION_RESUME_LINK';
export const SECTION_RESUME_MORE = 'SECTION_RESUME_MORE';
export const SECTION_CONTACT_MAIL = 'SECTION_CONTACT_MAIL';

export const startSection = (section = SECTION_HELLO_WORLD) => ({ type: START_SECTION, section });

export const TOGGLE_RESPONSE = 'TOGGLE_RESPONSE';

export const toggleResponse = sections => ({ type: TOGGLE_RESPONSE, sections });
