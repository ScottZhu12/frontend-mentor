import { FETCH_USER } from './type';
import { FETCH_ERR } from './type';
import { SET_THEME } from './type';
import githubUserSearch from '../apis/githubUserSearch';

export const fetchUser = (formValues) => async (dispatch) => {
  try {
    const res = await githubUserSearch.get(`/users/${formValues}`);
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERR,
      payload: err.response,
    });
  }
};

export const setTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);

  return {
    type: SET_THEME,
    payload: localStorage.getItem('theme'),
  };
};
