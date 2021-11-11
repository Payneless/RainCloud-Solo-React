import { useDispatch } from "react-redux";
import { deleteSound } from "../../store/sounds";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteSound(id));
  };
  return (
    <div>
      <button onClick={() => handleDelete(id)} className="delete-sound">
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
