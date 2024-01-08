import { Link } from "react-router-dom";

import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>KAREN SUTTON HAIR STUDIO</p>
      <p>781.631.7603</p>
      <Link target="_blank" to="https://www.facebook.com/karensuttonhairstudio">
        <img className="facebook-icon" src={facebookIcon} alt="Facebook icon" />
      </Link>

      <Link
        target="_blank"
        to="https://www.instagram.com/karensuttonhairstudio/?hl=en"
      >
        <img
          className="instagram-icon"
          src={instagramIcon}
          alt="Instagram Icon"
        />
      </Link>
      {/* </a> */}
      <p className="copyright">
        Web design & creation by <b>PR</b>ide Visionaries
      </p>
    </div>
  );
};

export default Footer;
