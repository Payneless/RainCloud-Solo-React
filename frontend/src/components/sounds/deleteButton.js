import { useDispatch } from "react-redux";
import { deleteSound } from "../../store/sounds";

const DeleteButton = ({ id }) => {
  console.log("incomponent", id);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("idinhandle", id);
    dispatch(deleteSound(id));
  };
  return (
    <div>
      <button onClick={() => handleDelete(id)} className="sound-func-button">
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
