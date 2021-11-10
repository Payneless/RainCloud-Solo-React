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
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      content,
      userId,
      file,
    };
    dispatch(addASound(payload));

    history.push("/");
  };

  return (
    <div className="add-sound">
      <h3>Add A Sound</h3>
      <form onSubmit={handleSubmit} className="add-sound-form">
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
      </form>
    </div>
  );
};
