import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSounds } from "../../store/sounds";
import MediaPlayer from "./mediaPlayer";
import { Modal } from "../../context/modal";
import DeleteButton from "./deleteButton";
import UpdateSound from "../UpdateSound/updateSound";

const Sounds = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const sounds = useSelector((state) => Object.values(state.sounds));
  useEffect(() => {
    dispatch(getAllSounds());
  }, [dispatch]);

  const getNewRandomColor = (id) => {
    let colorArray = [
      "aqua",
      "aquamarine",
      "coral",
      "cornsilk",
      "gold",
      "lavender",
      "lightcoral",
      "palegreen",
      "palevioletred",
      "peachpuff",
    ];
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return randColor;
  };

  return (
    <div>
      <ul className="sounds">
        {sounds?.map(({ id, name, content, playlistId, file, User }) => (
          <li
            key={id}
            className={`media-${id}`}
            style={{ backgroundColor: getNewRandomColor(id), margin: "2rem" }}
          >
            <MediaPlayer file={file} name={name} />
            {sessionUser?.id === User?.id && (
              <div className="func-buttons">
                <UpdateSound id={id} />
                <DeleteButton id={id} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sounds;
