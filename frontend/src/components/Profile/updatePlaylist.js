import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAPlaylist } from "../../store/profile";

const updatePlaylist = ({ id }) => {
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

    const updatedPlaylist = dispatch(updateAPlaylist(payload));
  };
};
