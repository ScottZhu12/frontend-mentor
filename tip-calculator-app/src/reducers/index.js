import { combineReducers } from 'redux';

import { tipReducer } from './tipReducer';

const reducers = combineReducers({
  tipReducer,
});

export default reducers;
