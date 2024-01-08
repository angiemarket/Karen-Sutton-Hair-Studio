import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import { UserContext } from "../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    // console.log("close cart");
  };
  return (
    <div onClick={toggleIsCartOpen} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className={`item-count ${cartCount <= 9 ? "single" : "double"}`}>
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
