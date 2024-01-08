import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart-container">
      <h2>Your cart is empty.</h2>
      <p>Add your favorite items to your cart.</p>
      <Button onClick={() => navigate("/shop")}>SHOP NOW</Button>
    </div>
  );
};

export default EmptyCart;
