import React, { useState } from "react";
import { addToPlaylist } from "../../store/sounds";
import { useDispatch, useSelector } from "react-redux";

const AddASoundToPlaylist = ({ soundId }) => {
  const playlist = useSelector((state) => Object.values(state.playlist));
  const [playlistId, setPlaylistId] = useState(playlist[0].id);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addToPlaylist(soundId, playlistId));
  };

  return (
    <form onSubmit={handleSubmit} className="add-to-playlist">
      <select
        onChange={(e) => {
          setPlaylistId(e.target.value);
        }}
        value={playlistId}
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
        Add To Playlist
      </button>
    </form>
  );
};

export default AddASoundToPlaylist;
