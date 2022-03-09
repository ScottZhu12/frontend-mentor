const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_COMMENT":
      return action.payload;
    default:
      return state;
  }
};

export default commentReducer;
