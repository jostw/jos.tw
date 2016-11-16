export const START_HELLO = 'START_HELLO';
export const SHOW_HELLO_MESSAGE = 'SHOW_HELLO_MESSAGE';

export const startHello = () => ({ type: START_HELLO });
export const showHelloMessage = index => ({ type: SHOW_HELLO_MESSAGE, index });
