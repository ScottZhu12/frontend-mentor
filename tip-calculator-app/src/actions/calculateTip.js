import { FIND_TIP } from './types';
import { RESET } from './types';

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

export const reset = () => {
  return {
    type: RESET,
  };
};
