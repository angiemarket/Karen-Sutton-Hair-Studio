import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getServicesAndDocuments } from "../../utils/firebase.utils";
import { scrollToTop } from "../../utils/common.utils";

import { UserContext } from "../../contexts/user.context";

import Button from "../../components/button/button.component";
import Loading from "../../components/loading/loading.component";
import Footer from "../../components/footer/footer.component";

import CovidModal from "../../components/covid-modal/covid-modal";
import ServicesModal from "./services.modal";
import ContactFormModal from "../../components/contact-form/contact-form.modal";

import scroll_up_arrow_img from "../../assets/scroll-up.png";
import word_your_img from "../../assets/word-your.png";
import edit_icon from "../../assets/edit.svg";

import { Tooltip as ReactTooltip } from "react-tooltip";

import "./services.styles.scss";

const ServicesPage = () => {
  const [servicesMap, setServicesMap] = useState({});
  const [openCovidMsg, setOpenCovidMsg] = useState(false);
  const [openEditMode, setOpenEditMode] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);

  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getServicesMap = async () => {
      const servicesMap = await getServicesAndDocuments();
      setServicesMap(servicesMap);
    };
    getServicesMap();
  }, []);

  if (!servicesMap) return <Loading />;

  return (
    <div className="services-page">
      <div className="covid-regulations-container">
        <h5 onClick={() => setOpenCovidMsg(true)}>
          READ HERE FOR COVID REGULATIONS + SAFETY
        </h5>
      </div>
      <div className="banner-section">
        <div className="flex">
          <h5>HERE TO MEET</h5>
          <img
            className="styled-word-img"
            src={word_your_img}
            alt="styled word 'your'"
          />
          <h5>HAIR CARE NEEDS</h5>
          <p>
            At Karen Sutton Hair Studio, we offer a variety of services and our
            team is ready to meet your hair care needs. Cut and color
            consultations are based off of thickness and length of hair. All of
            our appointments are booked by telephone, or you can reach us by
            submitting your contact information and a salon assistant will be in
            touch with you within 48 hours.
          </p>
          <Button onClick={() => navigate("/contact")}>REACH OUT TO US</Button>
        </div>
      </div>
      {currentUser?.email === "angiemermed@gmail.com" && (
        <img
          onClick={() => setOpenEditMode(true)}
          className="edit-icon"
          src={edit_icon}
          alt="edit"
          data-tooltip-id="edit-tooltip"
        />
      )}
      <ReactTooltip
        id="edit-tooltip"
        place="bottom"
        content="Update services"
      />

      <div className="prices-container">
        <div className="services-header">
          <h1>HAIR SERVICES</h1>
          <h1>PRICING</h1>
        </div>
        {Object.keys(servicesMap).map((title, id) => {
          const products = servicesMap[title];

          return (
            <div className="services-sections" key={id}>
              <h2>{title}</h2>
              {products.map((obj) => {
                return (
                  <div className="services-table" key={obj.id}>
                    <div className="service-name">{obj.name}</div>
                    <div className="service-price">${obj.price}+</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="contact-haircare">
        <Button onClick={() => setOpenContactForm(true)}>
          BEGIN YOUR HAIR CARE
        </Button>
      </div>
      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll to top arrow"
        data-tooltip-id="scroll-tooltip"
      />
      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />
      <Footer />
      <CovidModal open={openCovidMsg} setOpen={setOpenCovidMsg} />
      <ServicesModal
        open={openEditMode}
        setOpen={setOpenEditMode}
        servicesMap={servicesMap}
      />
      <ContactFormModal open={openContactForm} setOpen={setOpenContactForm} />
    </div>
  );
};

export default ServicesPage;
