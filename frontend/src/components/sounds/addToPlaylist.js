import React, { useState } from "react";
import { addToPlaylist } from "../../store/profile";
import { useDispatch, useSelector } from "react-redux";
import RemoveASoundFromPlaylist from "./removeFromPlaylist";

const AddASoundToPlaylist = ({ soundId, playlistForRemove, classname }) => {
  const playlist = useSelector((state) => Object.values(state.playlist));
  const [playlistId, setPlaylistId] = useState(1);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addToPlaylist(soundId, playlistId));
  };

  return (
    <form onSubmit={handleSubmit} className={classname}>
      <select
        onChange={(e) => {
          setPlaylistId(e.target.value);
        }}
        value={playlistId}
        className="list-of-playlists"
      >
        {playlist?.map((onePlaylist, idx) => {
          return (
            <option key={idx} value={onePlaylist.id}>
              {onePlaylist.name}
            </option>
          );
        })}
      </select>
      <button className="submit-button" type="submit">
        Add
      </button>
      <RemoveASoundFromPlaylist
        soundId={soundId}
        playlistId={playlistForRemove}
      />
    </form>
  );
};

export default AddASoundToPlaylist;
