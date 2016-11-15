import { combineReducers } from 'redux';

function messages(state = [], action) {
  switch(action.type) {
    default:
      return [
        {
          content: 'Hello World!',
          type: 'server'
        }, {
          content: 'Hello World!',
          type: 'server'
        }, {
          content: 'Hello World!',
          type: 'client'
        }, {
          content: 'Hello World!',
          type: 'client'
        }, {
          content: 'Hello World!',
          type: 'server'
        }
      ];
  }
}

const rootReducer = combineReducers({ messages });

export default rootReducer;
