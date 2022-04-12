import { FIND_TIP } from '../actions';
import { RESET } from '../actions';

const initialState = {
  totalTip: '0.00',
  meanTip: '0.00',
};

export const tipReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_TIP:
      return {
        ...state,
        totalTip: action.payload.totalTip,
        meanTip: action.payload.meanTip,
      };
    case RESET:
      return {
        ...state,
        totalTip: '0.00',
        meanTip: '0.00',
      };
    default:
      return state;
  }
};
