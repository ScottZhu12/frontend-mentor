import { SET_THEME } from '../actions/type';

const setThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_THEME:
      return { currentTheme: action.payload };
    default:
      return state;
  }
};

export default setThemeReducer;
