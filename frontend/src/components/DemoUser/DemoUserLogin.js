import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

const DemoUserLogin = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("Demo-lition");
  const [password, setPassword] = useState("password");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      credential,
      password,
    };
    return dispatch(sessionActions.login(payload)).catch(async (res) => {
      const loginData = await res.json();
    });
  };
  return (
    <div>
      <button type="submit" className="demoUserButton" onClick={handleSubmit}>
        Demo User
      </button>
    </div>
  );
};

export default DemoUserLogin;
