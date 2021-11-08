import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import Sounds from "./components/sounds/sounds";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
              <Route path="/signup">
                <SignupFormPage />
              </Route>
              <Route path="/sounds">
                <Sounds />
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
