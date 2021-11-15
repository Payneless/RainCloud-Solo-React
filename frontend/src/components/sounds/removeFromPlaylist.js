import React from "react";
import { deleteFromPlaylist } from "../../store/profile";
import { useDispatch } from "react-redux";

const RemoveASoundFromPlaylist = ({ playlistId, soundId }) => {
  const dispatch = useDispatch();

  const handleDelete = (playlistId, soundId, e) => {
    e.preventDefault();
    dispatch(deleteFromPlaylist(soundId, playlistId));
  };

  return (
    <button
      onClick={(e) => handleDelete(playlistId, soundId, e)}
      className="delete-from-playlist"
    >
      Remove
    </button>
  );
};

export default RemoveASoundFromPlaylist;
