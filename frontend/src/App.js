import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <nav className="nav-bar">Nav-Bar</nav>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
