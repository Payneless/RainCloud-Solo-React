import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/homepage/index";
import "./index.css";

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
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
          <div className="sidebar-reverse"></div>
        </div>
        <footer className="footer">
          <div className="github">
            <NavLink to="https://github.com/Payneless">
              <i class="fab fa-github fa-2x"></i>
            </NavLink>
          </div>
          <div className="linkedin">
            <NavLink to="https://www.linkedin.com/in/jake-payne-aba009155/">
              <i class="fab fa-linkedin-in fa-2x"></i>
            </NavLink>
          </div>
        </footer>
      </div>
    )
  );
}
export default App;
