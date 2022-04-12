import { FIND_TIP } from '../actions';
import { RESET } from '../actions';
import { STORE_FORM_VALUES } from '../actions';
import { GET_FORM_VALUES } from '../actions';

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
    case STORE_FORM_VALUES:
      return {
        ...state,
        formValues: action.payload,
      };
    case GET_FORM_VALUES:
      return {
        ...state,
      };
    case RESET:
      if (!state.formValues) {
        return {
          ...state,
          totalTip: '0.00',
          meanTip: '0.00',
        };
      }

      state.formValues.bill = '';
      state.formValues.people = '';
      state.formValues.customTip = '';

      return {
        ...state,
        totalTip: '0.00',
        meanTip: '0.00',
      };
    default:
      return state;
  }
};
