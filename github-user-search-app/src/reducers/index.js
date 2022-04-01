import { combineReducers } from 'redux';

import fetchUserReducer from './fetchUserReducer';
import setThemeReducer from './setThemeReducer';

export default combineReducers({
  userReducer: fetchUserReducer,
  themeReducer: setThemeReducer,
});
