import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./styles/App.css";

import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import VerticalNavigation from "./components/VerticalNav/VerticalNav";

/**
 * Main component who manage the route
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app__layout">
        <Navigation />
        <VerticalNavigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/user/12" />
          </Route>
          <Route path="/user/:id" render={(props) => <Dashboard {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
