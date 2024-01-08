import React from "react";
import Modal from "react-modal";

import karen_sutton_signature_logo from "../../assets/karen-sutton-brand-white.png";
import "./covid-modal.styles.scss";

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
    backgroundColor: "#c0c48d",
  },
};

Modal.setAppElement("#root");

const CovidModal = ({ open, setOpen }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <div className="covid-modal">
        <div className="modal-heading">
          <h3>COVID REGULATIONS + SAFETY</h3>
          <button onClick={() => setOpen(false)}>&#x2715;</button>
        </div>

        <div className="modal-content">
          <p>
            Due to our close proximity to each other, we are requiring everyone
            to wear a mask at ALL times during salon visitation.
          </p>
          <p>
            If you are experiencing COVID-19 symptoms, please stay home & stay
            safe.
          </p>
          <p>We look forward to seeing you soon!</p>
          <div className="ks-brand-container">
            <img
              className="karen-sutton-signature-img"
              src={karen_sutton_signature_logo}
              alt="Karen Sutton Hair Studio"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CovidModal;
