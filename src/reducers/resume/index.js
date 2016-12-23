import { combineReducers } from 'redux';

import header from './headerReducer';
import summary from './summaryReducer';
import experience from './experienceReducer';
import project from './projectReducer';
import award from './awardReducer';

const rootReducer = combineReducers({ header, summary, experience, project, award });

export default rootReducer;
