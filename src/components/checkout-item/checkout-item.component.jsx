import { useContext, useState } from "react";

import { CartContext } from "../../contexts/cart.context";

import DeleteModal from "../delete-modal/delete.modal";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const [open, setOpen] = useState(false);
  const { name, description, imageUrl, price, quantity } = cartItem;

  const {
    clearItemFromCart,
    addItemToCart,
    removeItemToCart,
    cartItems,
    setCartItems,
  } = useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
    console.log(cartItems);
    setCartItems(cartItems.filter((obj) => obj.id !== cartItem.id));
  };
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <div className="product-info-container">
        <div className="name">{name}</div>
        <div className="description">{description}</div>

        <div className="price-container">
          <div className="quantity">
            <span onClick={removeItemHandler}>-</span>
            <span className="num">{quantity}</span>
            <span onClick={addItemHandler}>+</span>
          </div>
          <div className="price">${price}.00</div>
        </div>
      </div>

      <div className="remove-button" onClick={() => setOpen(true)}>
        &#10005;
      </div>

      <DeleteModal
        open={open}
        setOpen={setOpen}
        removeItem={clearItemHandler}
        title={`Delete confirmation`}
        message={`Are you sure you want to delete this item from the cart? The
        item will be permanently removed. This action cannot be undone.`}
        buttonText={`Delete`}
      />
    </div>
  );
};

export default CheckoutItem;
