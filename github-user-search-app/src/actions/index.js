import { FETCH_USER } from './type';
import githubUserSearch from '../apis/githubUserSearch';

export const fetchUser = (formValues) => async (dispatch) => {
  const { data } = await githubUserSearch.get(`/users/${formValues}`);

  dispatch({ type: FETCH_USER, payload: data });
};
