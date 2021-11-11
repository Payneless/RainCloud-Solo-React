import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addASound } from "../../store/sounds";
import "./createSound.css";

const CreateSound = ({ showModal }) => {
  const userId = useSelector((state) => state.session.user.id);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [playlistId, setPlaylistId] = useState(1);
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setErrors([]);
    e.preventDefault();
    const payload = {
      name,
      content,
      userId,
      playlistId,
      file,
    };
    let errs;
    await dispatch(addASound(payload)).catch(async (res) => {
      const soundData = await res.json();
      console.log("data", soundData.errors);
      if (soundData && soundData.errors) setErrors(soundData.errors);
      errs = soundData.errors;
    });
    if (!errs) {
      showModal(false);
    }
  };

  return (
    <div className="add-sound">
      <form onSubmit={handleSubmit} className="add-sound-form">
        <ul className="errors-list">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <h3>Add a Sound</h3>
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
