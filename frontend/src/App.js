import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/homepage/index";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  //test
  return (
    isLoaded && (
      <div>
        <nav className="nav-bar">
          <Navigation isLoaded={isLoaded} />
        </nav>
        <div className="wrapper">
          <div className="sidebar"></div>
          <div className="maincontent">
            <Switch>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
          <div className="sidebar"></div>
        </div>
      </div>
    )
  );
}
export default App;
