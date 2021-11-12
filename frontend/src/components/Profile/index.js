import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSounds } from "../../store/sounds";
import MediaPlayer from "./mediaPlayer";
import { Modal } from "../../context/modal";

const Profile = () => {
  const profile = useSelector((state) => Object.values(state.profile));
  return (
    <>
      <h4>Hi!</h4>
      <div>{profile?.map({ id, name, content, sounds })}</div>
    </>
  );
};

export default Profile;
