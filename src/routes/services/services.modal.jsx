import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import FormInput from "../../components/form-input/form-input.component";

import "./services.styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "800px",
    width: "800px",
    backgroundColor: "#d9dbba",
  },
};

Modal.setAppElement("#root");

const ServicesModal = ({ open, setOpen, servicesMap }) => {
  const [formFields, setFormFields] = useState(servicesMap);
  const { name, price } = formFields;

  const handleChange = (event, title) => {
    const { name, value } = event.target;
    console.log("event", name, value, title, servicesMap);
    Object.keys(servicesMap)
      .map((title) => title)
      .map((obj) => console.log(obj));

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <div className="services-modal">
        <div className="modal-heading">
          <h3>Edit Services</h3>
          <button onClick={() => setOpen(false)}>&#x2715;</button>
        </div>
        {/* <hr /> */}

        <form>
          {Object.keys(servicesMap).map((title, id) => {
            const products = servicesMap[title];
            return (
              <div className="services-form-container" key={id}>
                <FormInput
                  label="Service Type"
                  type="text"
                  required
                  onChange={handleChange}
                  name="title"
                  value={title.toLocaleUpperCase()}
                  style={{
                    color: "#c0c48d",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    padding: "auto 10px",
                  }}
                />
                {products.map((obj, i) => {
                  return (
                    <div className="services-edit-mode" key={obj.id}>
                      <FormInput
                        label={i === 0 ? "Service" : ""}
                        type="text"
                        required
                        onChange={handleChange}
                        name="name"
                        value={obj.name}
                      />
                      <FormInput
                        label={i === 0 ? "Price" : ""}
                        type="text"
                        required
                        onChange={handleChange}
                        name="price"
                        value={`$${obj.price}`}
                      />
                    </div>
                  );
                })}
                <hr className="solid"></hr>
              </div>
            );
          })}
        </form>
      </div>
    </Modal>
  );
};

export default ServicesModal;
