import { useState } from "react";

import ContactForm from "../../components/contact-form/contact-form.component";
import Footer from "../../components/footer/footer.component";
import CovidModal from "../../components/covid-modal/covid-modal";
import Availability from "../../components/availability/availability.component";

import scroll_up_arrow_img from "../../assets/scroll-up.png";
import word_deserve_styled_text_img from "../../assets/word-deserve.png";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { scrollToTop } from "../../utils/common.utils";

import "./contact.styles.scss";

const ContactPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <div className="center-header-contact">
          <h3>GET THE HAIR CARE YOU</h3>
          <img
            className="styled-text"
            src={word_deserve_styled_text_img}
            alt="styled word 'deserve'"
          />
        </div>
      </div>

      <div className="contact-page-content">
        {/*  Location and Hours Section  */}
        <div className="location-and-hours-container">
          <Availability />

          <p className="covid-modal-button" onClick={() => setOpen(true)}>
            COVID REGULATIONS + SAFETY
          </p>

          <CovidModal open={open} setOpen={setOpen} />
        </div>

        {/*  Contact Form Section  */}
        <div className="form-container">
          <h3 className="form-container-h3">TELL US ABOUT YOU...</h3>
          <ContactForm />

          {/*  Contact Details Section  */}
          <div className="contact-details-container">
            <h4>GIVE US A CALL</h4>
            <h5>781.631.7603</h5>
            <h4>STAY CONNECTED WITH US ON SOCIAL</h4>
          </div>
        </div>
      </div>

      {/* Scroll to Top Arrow */}
      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll up arrow"
        data-tooltip-id="scroll-tooltip"
      />
      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />
      <Footer />
    </div>
  );
};

export default ContactPage;
