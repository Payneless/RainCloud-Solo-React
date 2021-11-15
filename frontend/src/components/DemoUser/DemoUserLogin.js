import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const DemoUserLogin = () => {
  const [credential] = useState("Demo");
  const [password] = useState("password");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      credential,
      password,
    };
    return dispatch(sessionActions.login(payload)).catch(async (res) => {
      await res.json();
    });
  };
  return (
    <button type="submit" className="demoUserButton" onClick={handleSubmit}>
      Demo User
    </button>
  );
};

export default DemoUserLogin;
