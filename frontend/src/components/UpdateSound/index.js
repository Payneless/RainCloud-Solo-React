import UpdateSound from "./updateSound";
import { useState } from "react";
import { Modal } from "../../context/modal";

const UpdateSoundModal = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="sound-func-button">
        Edit
      </button>
      {showModal && (
        <Modal onClose={handleModal} id={id}>
          <UpdateSound id={id} />
        </Modal>
      )}
    </div>
  );
};

export default UpdateSoundModal;
