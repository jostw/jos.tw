import { combineReducers } from 'redux';

import header from './headerReducer';
import summary from './summaryReducer';
import experience from './experienceReducer';

const rootReducer = combineReducers({ header, summary, experience });

export default rootReducer;
