import { combineReducers } from 'redux';

import header from './headerReducer';
import summary from './summaryReducer';

const rootReducer = combineReducers({ header, summary });

export default rootReducer;
