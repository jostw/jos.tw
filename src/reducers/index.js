import { combineReducers } from 'redux';
import { messages as aboutMessages } from './aboutReducer';

const rootReducer = combineReducers({ aboutMessages });

export default rootReducer;
