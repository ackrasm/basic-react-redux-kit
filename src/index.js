import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";

import reducers from "./redux/reducers";
import AppRouter from "./routes/AppRouter";

import "./styles/application.scss";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter store={store} />
  </Provider>,
  document.getElementById("root")
);