import { useState } from "react";
import "../styles/Modal.css";
import Details from "./Details";
function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return <>{modal && <Details closeModal={toggleModal} />}</>;
}

export default Modal;
