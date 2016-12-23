import { combineReducers } from 'redux';

import header from './headerReducer';
import summary from './summaryReducer';
import experience from './experienceReducer';
import project from './projectReducer';
import award from './awardReducer';
import education from './educationReducer';
import publication from './publicationReducer';
import skill from './skillReducer';

const rootReducer = combineReducers({ header, summary, experience, project, award, education, publication, skill });

export default rootReducer;
