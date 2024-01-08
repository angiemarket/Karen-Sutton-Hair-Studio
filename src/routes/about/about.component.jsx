import { useState } from "react";

import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import ContactFormModal from "../../components/contact-form/contact-form.modal";

import salon_img from "../../assets/salon-03-bw.jpg";
import word_the_img from "../../assets/word-the.png";
import word_deserve_img from "../../assets/word-deserve.png";

import "./about.styles.scss";

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*  Title Section  */}
      <div className="about-page">
        <section className="header">
          <p>
            HAIR THAT COMPLEMENTS YOU, SO <b>YOU</b> GET THE COMPLIMENTS
          </p>
        </section>

        {/*  About Section  */}
        <div className="about-page-body-container">
          <div className="mobile-background">
            <div className="row-container">
              <div className="col-container about-content">
                <div className="flex">
                  <h1>ABOUT</h1>
                  <img
                    className="styled-the-text"
                    src={word_the_img}
                    alt="styled_the_text"
                  />
                  <h1>SALON</h1>
                </div>
                <p className="p-inline">
                  It all began in 1992 with just three chairs, from there Karen
                  grew her salon to six chairs where six uniquely talented
                  stylists get to do their best work. Her philosophy is: that a
                  happy stylist is a good one, and through the years she has
                  encouraged each stylist to embrace their individuality in
                  their creative process all while upholding the Karen Sutton
                  Hair Studio standard: professional, educated, and friendly.
                </p>
                <br />
                <br />
                <p className="p-inline">
                  Karen Sutton Hair Studio is a full-service hair salon that
                  attracts clients seeking a creative, stylistic and
                  personalized approach to their hare care through understanding
                  their needs and establishing long-lasting relationships. All
                  KSHS Stylists are focused on elevating their education and
                  improving their hair industry techniques by staying up-to-date
                  on trends and styles so that clients can get the hair care
                  they
                </p>
                <img
                  className="styled-deserve-text"
                  src={word_deserve_img}
                  alt="styled_deserve_text"
                />
                <p className="period">.</p>
                <div className="about-button-container">
                  <Button onClick={() => setOpen(true)}>
                    BECOME A NEW CLIENT
                  </Button>
                  <ContactFormModal open={open} setOpen={setOpen} />
                </div>
              </div>

              <div className="about-pic-container">
                <img
                  className="about-page-img"
                  src={salon_img}
                  alt="Salon image"
                />
              </div>
            </div>
          </div>
          <div className="mobile-about-bottom-space"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
