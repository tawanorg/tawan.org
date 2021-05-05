import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// containers
import HomePage from "./containers/HomePage";
import NoMatch from "./components/NoMatch";

const AppContainer: React.FC = () => (
  <>
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
  </>
)

export default AppContainer;
