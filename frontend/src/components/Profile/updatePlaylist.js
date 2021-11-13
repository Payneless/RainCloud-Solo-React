import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAPlaylist } from "../../store/profile";

const UpdatePlaylist = ({ id, setShowModal1 }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      name,
      content,
    };

    dispatch(updateAPlaylist(payload));
    setShowModal1(false);
  };

  return (
    <form onSubmit={handleSubmit} className="update-playlist-form">
      <ul className="errors-list">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <h4>Update Playlist</h4>
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
      <button type="submit">Update Playlist</button>
    </form>
  );
};

export default UpdatePlaylist;
