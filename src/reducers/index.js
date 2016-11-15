import { combineReducers } from 'redux';
import { messages as helloMessages } from './helloReducer';
import { messages as aboutMessages } from './aboutReducer';

const rootReducer = combineReducers({ helloMessages, aboutMessages });

export default rootReducer;
