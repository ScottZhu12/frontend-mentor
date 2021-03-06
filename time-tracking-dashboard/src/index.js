import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
