import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getAllSounds } from "../../store/sounds";
import MediaPlayer from "./mediaPlayer";
import { Modal } from "../../context/modal";
import DeleteButton from "./deleteButton";

const Sounds = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const sounds = useSelector((state) => Object.values(state.sounds));
  useEffect(() => {
    dispatch(getAllSounds());
  }, [dispatch]);

  return (
    <div>
      <div className="sounds">
        {sounds?.map(({ id, name, content, playlistId, file, User }) => (
          <div key={id}>
            <MediaPlayer file={file} name={name} />
            {sessionUser?.id === User?.id && <DeleteButton id={id} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sounds;
