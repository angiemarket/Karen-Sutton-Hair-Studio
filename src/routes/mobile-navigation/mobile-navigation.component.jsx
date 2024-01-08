import { Fragment, useContext, useRef, useEffect, useState } from "react";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase.utils";

import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

import karen_sutton_logo from "../../assets/karen-sutton-brand-gold.png";
import facebook_logo from "../../assets/fb-icon-nav.png";
import instagram_logo from "../../assets/ig-icon-nav.png";
import menu_icon from "../../assets/hamburger-menu.svg";

import "./mobile-navigation.styles.scss";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const cartIconRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    setOpen(false);
    window.localStorage.setItem("cartTotal", 0);
    window.localStorage.setItem("cartItems", JSON.stringify([]));
    window.location.reload(true);
  };

  return (
    <Fragment>
      <div className="mobile-navigation-container">
        <div className="ks-logo-container">
          <img
            className="ks-logo"
            src={karen_sutton_logo}
            alt="Karen Sutton Logo"
          />
        </div>

        <div className="navigation-links-container">
          <div className="social-media-container">
            <img
              className="social-media-logo"
              src={facebook_logo}
              alt="Karen Sutton Facebook Logo"
            />
            <img
              className="social-media-logo"
              src={instagram_logo}
              alt="Karen Sutton Instagram Logo"
            />
          </div>

          <div className="hamburger-menu-container">
            <img className="hamburger-menu" src={menu_icon} alt="Menu icon" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavigation;
