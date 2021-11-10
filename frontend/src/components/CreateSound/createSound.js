import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addASound } from "../../store/sounds";

const CreateSound = () => {
  const userId = useSelector((state) => state.session.user.id);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [playlistId, setPlaylistId] = useState(1);
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      content,
      userId,
      playlistId,
      file,
    };
    dispatch(addASound(payload));
    return dispatch(addASound(payload)).catch(async (res) => {
      const soundData = await res.json();
      if (soundData && soundData.errors) setErrors(soundData.errors);
    });

    history.push("/");
  };

  return (
    <div className="add-sound">
      <h3>Add A Sound</h3>
      <form onSubmit={handleSubmit} className="add-sound-form">
        <ul className="errors-list">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
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
        <input
          onChange={(e) => setFile(e.target.value)}
          value={file}
          placeholder="file.mp3"
        />
        <button className="submit-button" type="submit">
          Add Sound
        </button>
      </form>
    </div>
  );
};

export default CreateSound;
