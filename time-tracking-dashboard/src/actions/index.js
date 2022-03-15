import data from "../data/data.json";

export const fetchTimeframe = () => {
  return {
    type: "timeframes",
    payload: data,
  };
};

export const fetchActiveTimeframe = (active) => {
  return {
    type: "activeTimeFrame",
    payload: active,
  };
};
