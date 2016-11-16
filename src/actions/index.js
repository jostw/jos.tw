export const START_HELLO = 'START_HELLO';
export const ENTER_HELLO_MESSAGE = 'ENTER_HELLO_MESSAGE';
export const SHOW_HELLO_MESSAGE = 'SHOW_HELLO_MESSAGE';

export const startHello = () => ({ type: START_HELLO });
export const enterHelloMessage = index => ({ type: ENTER_HELLO_MESSAGE, index });
export const showHelloMessage = index => ({ type: SHOW_HELLO_MESSAGE, index });
