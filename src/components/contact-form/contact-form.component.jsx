import React, { useState } from "react";
import Button from "../button/button.component";

const ContactForm = ({ setSubmitted }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    phone: "",
    email: "",
    stylist: "",
    message: "",
  });

  const handleChange = (e) => setFormFields(e.target.value);

  const { name, phone, email, stylist, message } = formFields;
  return (
    <div className="contact-form-container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        // acceptCharset="utf-8"
        // action="https://formspree.io/f/xdoprrwd"
        // method="post"
      >
        <fieldset>
          <input
            type="hidden"
            name="_subject"
            value="Karen Sutton Hair Studio New Message!"
            readOnly
          />
          <input
            type="hidden"
            name="_next"
            value="Thank you for contacting us!"
            readOnly
          />

          {/*           NAME AND PHONE NUMBER FIELDS             */}
          <div className="input-group">
            <div className="double-columns">
              <input
                placeholder="Your name*"
                type="text"
                required
                className="custom-input-field"
                onChange={handleChange}
                name="name"
                value={name}
              />

              <input
                placeholder="Phone number*"
                type="text"
                required
                className="custom-input-field"
                onChange={handleChange}
                name="phone"
                value={phone}
              />
            </div>
          </div>

          {/*           EMAIL ADDRESS FIELD           */}
          <div className="input-group">
            <input
              type="email"
              className="custom-input-field"
              name="Email"
              value={email}
              onChange={handleChange}
              placeholder="Email address*"
              required
            />
          </div>

          {/*           SELECT STYLIST DROPDOWN            */}
          <select
            className="custom-select"
            name="stylist"
            required
            value={stylist}
            onChange={handleChange}
          >
            <option disabled>*Please select a stylist*</option>
            {[
              "General Inquiry",
              "Allie",
              "Caroline",
              "Danielle",
              "Jaxson",
              "Karen",
            ].map((obj) => (
              <option key={obj} value={obj}>
                {obj}
              </option>
            ))}
          </select>

          {/*           CUSTOM MESSAGE            */}
          <div className="input-group">
            <textarea
              className="custom-textarea"
              placeholder="Write us a message"
              name="Message"
              value={message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>

          {/*           SUBMIT BUTTON            */}
          <div className="align-button-left">
            <Button onChange={() => setSubmitted(true)}>SUBMIT</Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
