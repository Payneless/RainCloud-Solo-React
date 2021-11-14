import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSounds } from "../../store/sounds";
import { Modal } from "../../context/modal";
import { getAllPlaylists } from "../../store/profile";
import MediaPlayer from "../sounds/mediaPlayer";
import CreatePlaylist from "./addPlaylist";
import { deletePlaylist } from "../../store/profile";
import "./profile.css";
import UpdatePlaylist from "./updatePlaylist";
import AddASoundToPlaylist from "../sounds/addToPlaylist";
import RemoveASoundFromPlaylist from "../sounds/removeFromPlaylist";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const playlist = useSelector((state) => Object.values(state.playlist));
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

  const handleDelete = (id) => {
    dispatch(deletePlaylist(id));
  };
  let playlistId;
  return (
    <div className="main-content">
      <h3 className="header">My Playlists</h3>
      <button onClick={() => setShowModal(true)} className="create-a-playlist">
        Create a Playlist
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePlaylist showModal={setShowModal} />
        </Modal>
      )}
      <div className="playlists">
        {playlist?.map(({ id, name, content, Sounds }) => (
          <div key={id}>
            <div className="dont-show">{(playlistId = id)}</div>
            <h4 className="playlist-name">{name}</h4>
            <p className="playlist-content">{content}</p>
            <button onClick={() => setShowModal1(true)} className="func-button">
              Edit Playlist
            </button>
            {showModal1 && (
              <Modal onClose={() => setShowModal1(false)}>
                <UpdatePlaylist id={id} setShowModal1={setShowModal1} />
              </Modal>
            )}
            <div className="media-container-profile">
              {Sounds?.map(({ id, name, content, file, User }) => (
                <div
                  key={id}
                  className={`media`}
                  style={{
                    backgroundColor: getNewRandomColor(id),
                    margin: "2rem",
                    listStyleType: "none",
                    borderRadius: "50px",
                    padding: "1.2rem",
                    boxShadow: "0 0 10px black",
                    overflow: "hidden",
                    width: "20vw",
                  }}
                >
                  <MediaPlayer file={file} name={name} content={content} />
                  <AddASoundToPlaylist
                    soundId={id}
                    playlistForRemove={playlistId}
                    classname="add-to-playlist"
                  />
                  {/* <RemoveASoundFromPlaylist
                    soundId={id}
                    playlistId={playlistId}
                  /> */}
                </div>
              ))}
            </div>
            <button className="func-button" onClick={() => handleDelete(id)}>
              Delete Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
