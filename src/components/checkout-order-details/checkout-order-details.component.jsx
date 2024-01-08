import CheckoutItem from "../checkout-item/checkout-item.component";
import EmptyCart from "../empty-cart/empty-cart.component";

import "./checkout-order-details.styles.scss";

const CheckoutOrderDetails = ({ cartItems, cartTotal, cartCount }) => {
  const shippingCost = 10;
  const taxPercentage = 0.0625;

  if (!cartTotal) return <EmptyCart />;

  return (
    <div className="checkout-container">
      <h1 className="items-title">Items ({cartCount}):</h1>

      {cartItems?.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="order-summary-container">
        <h3>Order Summary</h3>
        <div className="order-summary-columns">
          <div className="subtotal">Subtotal:</div>
          <div className="subtotal">${cartTotal}.00</div>
        </div>
        <div className="order-summary-columns">
          <div>Shipping & handling:</div>
          <div>${shippingCost}.00</div>
        </div>
        <div className="order-summary-columns">
          <div>Total before tax:</div>
          <div>${cartTotal + shippingCost}.00</div>
        </div>
        <div className="order-summary-columns">
          <div>Estimated tax to be collected:</div>
          <div>${((cartTotal + shippingCost) * taxPercentage).toFixed(2)}</div>
        </div>
        <div className="order-summary-columns total">
          <h1 className="total">TOTAL:</h1>
          <h1 className="total">
            $
            {(
              (cartTotal + shippingCost) * taxPercentage +
              cartTotal +
              shippingCost
            ).toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderDetails;
