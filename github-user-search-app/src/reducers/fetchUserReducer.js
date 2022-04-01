import { FETCH_USER } from '../actions/type';
import { FETCH_ERR } from '../actions/type';

const fetchUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, data: { ...action.payload }, error: null };
    case FETCH_ERR:
      return { ...state, data: null, error: { ...action.payload } };
    default:
      return state;
  }
};

export default fetchUserReducer;
