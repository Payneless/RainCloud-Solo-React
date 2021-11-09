import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import Sounds from "./components/sounds/sounds";
import Homepage from "./components/homepage/index";
import useMediaPlayer from "./components/sounds/mediaPlayer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const mediaElement = useRef(null);
  const { playerState, play, handleProgress, handleMediaProgress, toggleMute } =
    useMediaPlayer(mediaElement);
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
