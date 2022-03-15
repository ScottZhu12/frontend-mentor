const activeTimeframeReducer = (state = null, action) => {
  switch (action.type) {
    case "activeTimeFrame":
      return action.payload;
    default:
      return state;
  }
};

export default activeTimeframeReducer;
