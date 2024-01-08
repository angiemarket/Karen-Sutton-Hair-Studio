import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Payment from "../../components/payment/payment.component";
import CheckoutOrderDetails from "../../components/checkout-order-details/checkout-order-details.component";
import Footer from "../../components/footer/footer.component";

import { Tooltip as ReactTooltip } from "react-tooltip";

import { scrollToTop } from "../../utils/common.utils";

import scroll_up_arrow_img from "../../assets/scroll-up.png";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, cartTotal, cartCount } = useContext(CartContext);

  return (
    <>
      <div className="checkout-page">
        <CheckoutOrderDetails
          cartItems={cartItems}
          cartTotal={cartTotal}
          cartCount={cartCount}
        />
        <Payment cartTotal={cartTotal} />
      </div>
      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll up arrow"
        data-tooltip-id="scroll-tooltip"
      />
      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />

      <Footer />
    </>
  );
};

export default CheckoutPage;
