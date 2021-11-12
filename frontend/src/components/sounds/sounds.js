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
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
  };

  return (
    <div>
      <ul className="sounds">
        {sounds
          ?.reverse()
          .map(({ id, name, content, playlistId, file, User }) => (
            <li
              key={id}
              className={`media-${id}`}
              style={{
                backgroundColor: getNewRandomColor(id),
                margin: "2rem",
                listStyleType: "none",
                borderRadius: "50px",
                padding: "1.2rem",
                boxShadow: "0 0 10px black",
              }}
            >
              <MediaPlayer file={file} name={name} content={content} />
              {sessionUser?.id === User?.id && (
                <div className="func-buttons">
                  <UpdateSound
                    id={id}
                    name={name}
                    content={content}
                    file={file}
                  />
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
