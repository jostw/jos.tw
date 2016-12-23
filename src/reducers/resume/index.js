import { combineReducers } from 'redux';

import header from './headerReducer';
import summary from './summaryReducer';
import experience from './experienceReducer';
import project from './projectReducer';

const rootReducer = combineReducers({ header, summary, experience, project });

export default rootReducer;
