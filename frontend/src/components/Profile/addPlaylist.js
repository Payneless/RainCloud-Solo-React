import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAPlaylist, getAllPlaylists } from "../../store/profile";
import { Modal } from "../../context/modal";


const CreatePlaylist = ({ showModal }) => {
  const id = useSelector((state) => state.session.user.id);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setErrors([]);
    e.preventDefault();
    const payload = {
      name,
      content,
      id,
    };
    let errs;
    await dispatch(addAPlaylist(payload, id)).catch(async (res) => {
      const playlistData = await res.json();
      if (playlistData && playlistData.errors) setErrors(playlistData.errors);
      errs = playlistData.errors;
    });
    if (!errs) {
      showModal(false);
    }
  };

  return (
    <div className="add-playlist">
      <form onSubmit={handleSubmit} className="add-playlist-form">
        <ul className="errors-list">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <h3>Create a Playlist</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Content"
        />
        <button className="submit-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
