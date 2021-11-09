import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getAllSounds } from "../../store/sounds";
import SoundDetail from "./soundsDetails";

const Sounds = () => {
  const dispatch = useDispatch();
  const sounds = useSelector((state) => Object.values(state.sounds));
  console.log("this is sounds", sounds);
  useEffect(() => {
    dispatch(getAllSounds());
  }, [dispatch]);

  return (
    <div>
      <div className="sounds">
        {sounds?.map(({ id, name, content, userId, playlistId, file }) => (
          <SoundDetail
            key={id}
            id={id}
            name={name}
            content={content}
            userId={userId}
            playlistId={playlistId}
            file={file}
          />
        ))}
      </div>
    </div>
  );
};

export default Sounds;
