import { FIND_TIP } from './types';
import { RESET } from './types';
import { STORE_FORM_VALUES } from './types';
import { GET_FORM_VALUES } from './types';

export const calculateTip = (bill, percent, people) => {
  const totalTip = (bill * percent).toFixed(2);
  const meanTip = (totalTip / people).toFixed(2);

  return {
    type: FIND_TIP,
    payload: {
      totalTip,
      meanTip,
    },
  };
};

export const storeFormValues = (formValues) => {
  return {
    type: STORE_FORM_VALUES,
    payload: formValues,
  };
};

export const getFormValues = () => {
  return {
    type: GET_FORM_VALUES,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
