import React, { useState } from "react";
import { addToPlaylist, deleteFromPlaylist } from "../../store/sounds";
import { useDispatch, useSelector } from "react-redux";

const RemoveASoundFromPlaylist = ({ playlistId, soundId }) => {
  const dispatch = useDispatch();

  const handleDelete = (playlistId, soundId) => {
    dispatch(deleteFromPlaylist(soundId, playlistId));
  };

	return (
		<button onClick={() => handleDelete(playlistId, soundId)} className="delete-from-playlist">
			Remove from Playlist
		</button>
	)
};

export default RemoveASoundFromPlaylist;
