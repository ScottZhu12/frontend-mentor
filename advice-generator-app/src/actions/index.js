import adviceSlip from "../apis/adviceSlip";

export const fetchComment = () => async (dispatch) => {
  const { data } = await adviceSlip.get("/advice");

  dispatch({ type: "FETCH_COMMENT", payload: data });
};
