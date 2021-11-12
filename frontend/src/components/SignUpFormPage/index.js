import SignUpFormPage from "./signupform";
import { useState, useEffect } from "react";
import { Modal } from "../../context/modal";

const SignUpModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="signUpButton">
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormPage />
        </Modal>
      )}
    </>
  );
};

export default SignUpModal;
