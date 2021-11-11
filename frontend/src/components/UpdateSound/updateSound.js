import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateASound } from "../../store/sounds";

const UpdateSound = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState([]);
};
