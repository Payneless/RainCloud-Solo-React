import { useDispatch } from "react-redux";
import { deleteSound } from "../../store/sounds";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteSound(id));
  };
  return (
    <div className="deleteSound-button">
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default DeleteButton;
