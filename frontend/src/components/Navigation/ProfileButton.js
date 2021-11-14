import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory, NavLink } from "react-router-dom";

const ProfileButton = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const RouteChange = (user) => {
    let id = user.id;
    let newPath = `/profile/${id}`;
    history.push(newPath);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };
  return (
    <>
      <NavLink to={`profile/${user.id}`}>
        <button className="profile-button">Profile</button>
      </NavLink>
      <button onClick={logout} className="log-out-button">
        Log Out
      </button>
    </>
  );
};

export default ProfileButton;
