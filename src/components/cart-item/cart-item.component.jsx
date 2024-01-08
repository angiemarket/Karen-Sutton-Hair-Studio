import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">
          {name.length > 17 ? name.substring(0, 16) + "..." : name}
        </span>
        <div className="price-container">
          <div className="quantity">
            <span onClick={removeItemHandler}>-</span>
            <span className="num">{quantity}</span>
            <span onClick={addItemHandler}>+</span>{" "}
          </div>
          <span>${price}.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
