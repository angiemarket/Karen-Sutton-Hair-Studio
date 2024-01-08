import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "./contact-form.component";

import check_mark_img from "../../assets/check-mark-white.svg";
import word_deserve_img from "../../assets/word-deserve.png";

import "./contact-form.styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "800px",
    minWidth: "750px",
    backgroundColor: "#d5c5af",
    padding: "1rem",
    border: "none",
    overflow: "hidden",
    marginRight: 0,
  },
};

Modal.setAppElement("#root");

const ContactFormModal = ({ open, setOpen }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <button className="close-button" onClick={() => setOpen(false)}>
        &#x2715;
      </button>

      <div className="modal-border">
        <div className="modal-content">
          {!submitted ? (
            <>
              <h3 className="contact-form-h3">
                GET THE HAIR CARE YOU{" "}
                <img
                  className="word-deserve-img"
                  src={word_deserve_img}
                  alt="styled word deserve"
                />
              </h3>
              <ContactForm setSubmitted={setSubmitted} />
            </>
          ) : (
            <div className="confirm-submission-container">
              <div>
                <img
                  className="word-deserve-img"
                  src={check_mark_img}
                  alt="check-mark"
                />
                <h3>Thank you for contacting us!</h3>
                <p>Your message was successfully sent.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ContactFormModal;
