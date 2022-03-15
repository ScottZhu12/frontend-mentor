const timeframeReducer = (state = null, action) => {
  switch (action.type) {
    case "timeframes":
      return action.payload;
    default:
      return state;
  }
};

export default timeframeReducer;
