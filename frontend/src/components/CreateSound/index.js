import { useState } from "react";
import { Modal } from "../../context/modal";
import CreateSound from "./createSound";

const AddSound = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <button onClick={() => setShowModal(true)}>Add A Sound</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSound showModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default AddSound;
