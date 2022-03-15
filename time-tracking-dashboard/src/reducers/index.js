import { combineReducers } from "redux";

import timeframeReducer from "./timeframeReducer";
import activeTimeframeReducer from "./activeTimeframeReducer";

export default combineReducers({
  timeframe: timeframeReducer,
  activeTimeFrame: activeTimeframeReducer,
});
