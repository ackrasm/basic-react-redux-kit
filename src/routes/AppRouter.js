import React from "react";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import Home from "./Home/components/Home";

const AppRouter = ({store}) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/" component={Home}/>
    </Router>
  )
}

export default AppRouter;