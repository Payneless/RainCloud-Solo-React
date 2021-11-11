import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateOneSound } from "../../store/sounds";

const UpdateSound = ({ id }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      name,
      content,
      file,
    };

    const updatedSound = dispatch(updateOneSound(payload, id));
  };

  return (
    <div>
      <button onClick={() => setShowEdit(showEdit === true ? false : true)}>
        Edit
      </button>
      {showEdit && (
        <form onSubmit={handleSubmit} className="update-sound-form">
          <ul className="errors-list">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
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
          <input
            placeholder="file.mp3"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
          <button type="submit">Update Sound</button>
        </form>
      )}
    </div>
  );
};

export default UpdateSound;
