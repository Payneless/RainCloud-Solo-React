import LoginForm from "./LoginForm";
import { useState, useEffect } from "react";

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={()=> setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  )
};

export default LoginFormModal;
