import { useState } from "react";
import { Modal } from "../../context/modal";
import CreateSound from "./createSound";

const AddSound = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="add-a-sound-button">
        Add A Sound
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSound showModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default AddSound;
