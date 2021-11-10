import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addASound } from "../../store/sounds";
import { Modal } from "../../context/modal";
import CreateSound from "./createSound";

const AddSound = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Add A Sound</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSound />
        </Modal>
      )}
    </>
  );
};

export default AddSound;
