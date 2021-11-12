import UpdateSound from "./updateSound";
import { useState, useEffect } from "react";
import { Modal } from "../../context/modal";

const UpdateSoundModal = (id) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="update-sound-button"
      >
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSound id={id} />
        </Modal>
      )}
    </>
  );
};

export default UpdateSoundModal;
