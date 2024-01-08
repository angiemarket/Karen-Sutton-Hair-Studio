import { useState, useRef, useEffect, useCallback } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

// Components
import Availability from "../../components/availability/availability.component";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";

// Modals
import CovidModal from "../../components/covid-modal/covid-modal";

// Images
import brand_img from "../../assets/karen-sutton-brand-gold.png";
import salon_banner_img from "../../assets/salon-01.jpg";
import salon_banner2_img from "../../assets/salon-02.jpg";
import salon_img from "../../assets/salon-mirror.jpg";
import word_together_img from "../../assets/word-together.png";
import social_reel_img from "../../assets/smr-web.png";
import scroll_up_arrow_img from "../../assets/scroll-up.png";

import { scrollToTop } from "../../utils/common.utils";
import { Tooltip as ReactTooltip } from "react-tooltip";

// Stylesheet
import "./home.styles.scss";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();
  const ref = useRef(null);
  const autoplayRef = useRef();

  const settings = {
    maxItems: 2,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    if (settings.autoplay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        goNext();
      }, settings.autoplaySpeed);
    }
  }, [currentIndex, activeAutoplay, isAnimating]);

  const goTo = useCallback(
    (index) => {
      if (!isAnimating) {
        setCurrentIndex(index);
        setIsAnimating(true);

        setTimeout(() => {
          setIsAnimating(false);
        }, settings.speed);
      }
    },
    [isAnimating, currentIndex]
  );

  const goNext = () => {
    goTo(currentIndex >= settings.maxItems - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="home-page">
      {/*       Page Header/Hero Section         */}
      <div
        style={
          currentIndex
            ? { backgroundImage: `url(${salon_banner2_img})` }
            : { backgroundImage: `url(${salon_banner_img})` }
        }
        className="salon-banner-image"
        ref={ref}
      >
        <div className="center-header">
          <p className="salon-image-text">
            {currentIndex ? (
              <>
                HERE TO MEET <b>YOUR</b>
                &nbsp;HAIR CARE NEEDS
              </>
            ) : (
              <>
                HAIR THAT COMPLEMENTS YOU, SO <b>YOU</b>
                &nbsp;GET THE COMPLIMENTS
              </>
            )}
          </p>
          <Link to={currentIndex ? "/shop" : "/contact"}>
            <Button type="button" buttonType="header">
              {currentIndex ? "SHOP OUR PRODUCTS" : "BECOME A NEW CLIENT"}
            </Button>
          </Link>
        </div>
      </div>

      {/*    Mission Statement Container    */}
      <div className="about-section-container">
        <div className="mission-statement-row">
          <div className="mission-statement-col col-1">
            <img
              className="ks-brand-img"
              src={brand_img}
              alt="Karen Sutton Hair Studio Brand"
            />
            <p className="indent-testimonial">
              Our mission at the salon is to bring innovative, friendly, and
              experienced service to all of our clients from the moment you step
              into our doors. We create the hair you desire with a lasting
              impression that goes beyond our salon.
            </p>
            <p className="indent-testimonial">Get to know us more...</p>
            <Link className="signature-link" to="/stylists">
              MEET OUR STYLISTS
            </Link>
          </div>
          <div className="mission-statement-col col-2">
            <Link to="/about">
              <Button type="button">MORE ABOUT US</Button>
            </Link>
          </div>
        </div>

        {/*      Testimonial/Covid Container     */}
        <div className="testimonial-container">
          <div className="mobile-testimonial">
            <h4>WE ARE IN THIS</h4>
            <img
              className="word-together-img"
              src={word_together_img}
              alt="'together' styled text"
            />
            <p className="indent-testimonial">
              At Karen Sutton Hair Studio we are activately committed to client
              + stylist safety. We have made a few changes in working against
              COVID-19. Please review some of our changes as they are important
              to your visit.
            </p>
            <p className="indent-testimonial">
              We look forward to seeing you soon!
            </p>

            <div className="testimonial-btn-container">
              <Button onClick={() => setOpen(true)} type="button">
                COVID-19 REGULATIONS + SAFETY
              </Button>
              <CovidModal open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
        <img
          className="salon-chair-img"
          src={salon_img}
          alt="salon mirror shot"
        />
      </div>

      {/*       Services and Products Advertising Section       */}
      <div className="services-and-products-container">
        <div className="header">
          <h2>EXPLORE WHAT OUR SALON OFFERS</h2>
        </div>
        <div className="content">
          <div className="image-container">
            <div className="image-1" onClick={() => navigate("/shop")}>
              <div className="image-content">
                <h3>PRODUCTS</h3>
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="image-2" onClick={() => navigate("/services")}>
              <div className="image-content">
                <h3>SERVICES</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*       Location and Hours Section       */}
      <Availability setOpen={setOpen} />

      {/*       Social Media Section        */}
      <div className="social-media-section">
        <Link
          target="_blank"
          to="https://www.instagram.com/karensuttonhairstudio/?hl=en"
        >
          <img
            className="desktop-reel"
            src={social_reel_img}
            alt="Social Reel Instagram"
          />
        </Link>
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
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;
