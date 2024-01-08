import { useContext, useState, useEffect } from "react";

import Button from "../button/button.component";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import check_mark_logo from "../../assets/check-mark-green.svg";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product, productId }) => {
  const { id, name, price, imageUrl, description } = product;
  const { addItemToCart, cartItems, cartTotal } = useContext(CartContext);
  const [confirmButtonMessage, setConfirmButtonMessage] = useState(false);
  const [cartIdList, setCardIdList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const addProductToCart = () => {
    addItemToCart(product);
    setSelectedProduct(product);

    setTimeout(() => {
      setConfirmButtonMessage(true);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      setConfirmButtonMessage(false);
    }, 2000);
  }, [confirmButtonMessage, addItemToCart]);

  useEffect(() => {
    setCardIdList(cartItems?.map((obj) => obj.id));

    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.localStorage.setItem("cartTotal", cartTotal);

    // console.log(window.localStorage.cartItems, selectedProduct);
  }, [cartItems, selectedProduct]);

  return (
    <div className="product-card-container" key={productId}>

      <div className='product-card-container-rows'>
      <img className="product-image" src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name.toUpperCase()}</div>
        <div className="description">{description}</div>
        <div className="price">${price}.00</div>
      </div>
      <Button onClick={addProductToCart}>Add to cart</Button>

      {confirmButtonMessage && (
        <div className="added-to-cart-confirmation">
          <img src={check_mark_logo} alt="checkmark" />
          <p>Added to cart successfully.</p>
        </div>
      )}

      {cartIdList?.includes(id) && (
        <div className="in-cart-indicator" data-tooltip-id="in-cart-tooltip">
          {/* In cart */}
          <ShoppingIcon className="shopping-icon" />
        </div>
      )}
      </div>

      <ReactTooltip id="in-cart-tooltip" place="bottom" content="In cart" />
    </div>
  );
};

export default ProductCard;
