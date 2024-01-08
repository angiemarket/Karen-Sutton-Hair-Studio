import { Fragment, useContext, useRef, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import DeleteModal from "../../components/delete-modal/delete.modal";

import profile from "../../assets/profile.png";
import logo from "../../assets/karen-sutton-brand-gold.png";

import karen_sutton_logo from "../../assets/karen-sutton-brand-gold.png";
import facebook_logo from "../../assets/fb-icon-nav.png";
import instagram_logo from "../../assets/ig-icon-nav.png";
import menu_icon from "../../assets/hamburger-menu.svg";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);
  const [userNavigation, setUserNavigation] = useState([]);

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const location = useLocation();
  const navigate = useNavigate();
  const cartIconRef = useRef();

  const isMobile = windowDimension <= 850;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  useEffect(() => {
    console.log(currentUser);
    if (currentUser?.email === "angiemermed@gmail.com") {
      setUserNavigation([
        {
          name: "Manage Store",
          href: "/manage-all-products",
        },
        {
          name: "Logout",
          href: "#",
          clickEvent: () => setOpen(true),
        },
      ]);
    } else {
      setUserNavigation([
        {
          name: "Account History",
          href: "/account-history",
        },
        {
          name: "Logout",
          href: "#",
          clickEvent: () => setOpen(true),
        },
      ]);
    }
  }, [currentUser]);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, [isMobile]);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    setOpen(false);
    window.localStorage.setItem("cartTotal", 0);
    window.localStorage.setItem("cartItems", JSON.stringify([]));
    // window.location.reload(true);
    navigate("/");
  };

  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !cartIconRef.current.contains(event.target)
        ) {
          callback();
        }
      };

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [ref]);

    return ref;
  };

  const handleClickOutside = () => {
    setIsCartOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  if (isMobile) {
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
  } else
    return (
      <Fragment>
        <div className="navigation-container">
          <Link className="logo-container" to="/">
            <img className="navigation-logo" src={logo} alt="image" />
          </Link>

          <div className="nav-link-container">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
              to="/about"
            >
              ABOUT
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/shop" ? "active-link" : ""
              }`}
              to="/shop"
            >
              PRODUCTS
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/stylists" ? "active-link" : ""
              }`}
              to="/stylists"
            >
              STYLISTS
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/services" ? "active-link" : ""
              }`}
              to="/services"
            >
              SERVICES
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
              to="/contact"
            >
              CONTACT
            </Link>
          </div>

          <div className="right-nav-links-container">
            {currentUser ? (
              <Menu as="div" className="menu-container">
                <Menu.Button className="menu-button">
                  <img
                    className="profile-navigation-logo"
                    src={profile}
                    alt="profile icon"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="menu-items-container">
                    <Menu.Item>
                      <div>{currentUser?.displayName}</div>
                    </Menu.Item>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className="menu-item"
                            onClick={item.clickEvent}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="menu-container">
                <div className="menu-button" onClick={() => navigate("/auth")}>
                  <img
                    className="profile-navigation-logo"
                    src={profile}
                    alt="profile icon"
                    data-tooltip-id="user-tooltip"
                  />
                </div>
              </div>
            )}

            <div ref={cartIconRef} data-tooltip-id="cart-tooltip">
              <CartIcon isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            </div>
          </div>

          {isCartOpen && (
            <div ref={ref}>
              <CartDropdown />
            </div>
          )}
        </div>

        <ReactTooltip id="user-tooltip" place="bottom" content="Sign in" />
        <ReactTooltip id="cart-tooltip" place="bottom" content="Cart" />

        <DeleteModal
          open={open}
          setOpen={setOpen}
          title={`Confirm logout`}
          message={`Are you sure you want to logout? You will no longer have access to your account information.`}
          buttonText={`Logout`}
          removeItem={signOutHandler}
        />
        <Outlet />
      </Fragment>
    );
};

export default Navigation;
