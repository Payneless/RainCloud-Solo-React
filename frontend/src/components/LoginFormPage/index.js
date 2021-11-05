import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

const LoginFormPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  if (sessionUser) {
    history.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      credential,
      password,
    };
    return dispatch(sessionActions.login(payload)).catch(async (res) => {
      const loginData = await res.json();
      if (loginData && loginData.errors) setErrors(loginData.errors);
    });
  };
  return (
    <div className="form-page">
      <h2>Log In</h2>
      <form className="log-in" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="username-input">
          Username:
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="password-input">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginFormPage;
