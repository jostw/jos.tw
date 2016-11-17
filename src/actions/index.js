export const START_HELLO = 'START_HELLO';
export const ENTER_HELLO_MESSAGE = 'ENTER_HELLO_MESSAGE';
export const SHOW_HELLO_MESSAGE = 'SHOW_HELLO_MESSAGE';

export const startHello = () => ({ type: START_HELLO });
export const enterHelloMessage = index => ({ type: ENTER_HELLO_MESSAGE, index });
export const showHelloMessage = index => ({ type: SHOW_HELLO_MESSAGE, index });

export const START_ABOUT = 'START_ABOUT';
export const ENTER_ABOUT_MESSAGE = 'ENTER_ABOUT_MESSAGE';
export const SHOW_ABOUT_MESSAGE = 'SHOW_ABOUT_MESSAGE';

export const startAbout = () => ({ type: START_ABOUT });
export const enterAboutMessage = index => ({ type: ENTER_ABOUT_MESSAGE, index });
export const showAboutMessage = index => ({ type: SHOW_ABOUT_MESSAGE, index });
