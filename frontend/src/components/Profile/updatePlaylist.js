import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAPlaylist } from "../../store/profile";

const UpdatePlaylist = ({ playlistid, setShowModal1 }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const playlist = useSelector((state) => Object.values(state.playlist));
  const playlistArray = Object.values(playlist);
  console.log("array", playlistArray);
  const wantedPlaylist = playlistArray.find(
    (playlist) => playlist.id === playlistid
  ).id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      wantedPlaylist,
      name,
      content,
    };

    dispatch(updateAPlaylist(payload));
    setShowModal1(false);
  };

  return (
    <form onSubmit={handleSubmit} className="update-playlist-form">
      <h3>Update Playlist</h3>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="edit-submit-button">
        Update Playlist
      </button>
    </form>
  );
};

export default UpdatePlaylist;
