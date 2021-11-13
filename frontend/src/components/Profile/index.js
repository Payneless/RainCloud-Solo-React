import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSounds } from "../../store/sounds";
import { Modal } from "../../context/modal";
import { getAllPlaylists } from "../../store/profile";
import MediaPlayer from "../sounds/mediaPlayer";
import "../sounds/mediaplayer.css";

const Profile = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const playlist = useSelector((state) => Object.values(state.playlist));
  console.log("playlists", playlist);
  useEffect(() => {
    dispatch(getAllPlaylists(sessionUser.id));
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
    <>
      <h4>Hi!</h4>
      <div>
        <ul className="playlists">
          {playlist?.map(({ id, name, content, sounds }) => (
            <li key={id}>
              {name}/{content}
              <ul className="media-container">
                {sounds?.map(
                  ({ id, name, content, playlistId, file, User }) => (
                    <div className={`media=${id}`}>
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
                      />
                      <MediaPlayer file={file} name={name} content={content} />
                    </div>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
