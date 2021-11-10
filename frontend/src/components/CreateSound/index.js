import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addASound } from "../../store/sounds";
import { Modal } from "../../context/modal";

const AddSound= () => {
  return (
    <>
      <button onClick={() => setShowModal(true)}>Add A Sound</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
					<>
        </Modal>
      )}
    </>
  );
};
