import React from "react";
import Modal from "react-modal";

import Button from "../button/button.component";

// import karen_sutton_signature_logo from "../../assets/karen-sutton-brand-white.png";
import exclamation_mark from "../../assets/exclamation-mark.svg";

import "./delete-modal.styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "800px",
    width: "550px",
    backgroundColor: "#ede8e8",
  },
};

Modal.setAppElement("#root");

const DeleteModal = ({
  open,
  setOpen,
  removeItem,
  message,
  buttonText,
  title,
}) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <div className="delete-modal">
        <div className="modal-heading">
          <h3>{title}</h3>
          <button onClick={() => setOpen(false)}>&#x2715;</button>
        </div>

        <div className="modal-content">
          <div className="confirmation-container">
            <img
              src={exclamation_mark}
              className="exclamation-mark-icon"
              alt="exclamation mark"
            />

            <div className="paragraph-container">
              <p className="text-sm text-gray-500">{message}</p>
            </div>
          </div>
          <div className="buttons-container">
            <Button onClick={removeItem} buttonType="tan">
              {buttonText}
            </Button>
            {"    "}
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
