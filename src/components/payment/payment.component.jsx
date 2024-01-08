import { useRef, useState } from "react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  AddressElement,
} from "@stripe/react-stripe-js";

import { UserContext } from "../../contexts/user.context";

import Button from "../button/button.component";

import "./payment.styles.scss";

const elementOptions = {
  style: {
    base: {
      fontSize: "18px",
      fontWeight: 400,
      fontFamily: "Montserrat",
      color: "#000",
      "::placeholder": {
        color: "#000",
      },
    },

    invalid: {
      color: "red",
    },
  },
};

const Payment = ({ cartTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const form = useRef();
  // const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(true);
  const [details, setDetails] = useState({
    expiryDate: "",
    cvc: "",
    name: "",
    number: "",
    zipCode: "",
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const appearance = {
    colors: {
      primary: "#fcfdff",
      background: "#000",
      componentBackground: "#000",
      componentBorder: "#f3f8fa",
      componentDivider: "#000000",
      primaryText: "blue",
      secondaryText: "#000000",
      componentText: "#000000",
      placeholderText: "#000",
    },
  };

  const handleChange = (e) => {
    setDetails((prevFormDetails) => {
      return {
        ...prevFormDetails,
        [e.target.name]: e.target.value,
      };
    });

    console.log(details);
  };

  const handleCheck = () => {
    console.log("ok");

    setChecked(false);
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const {
      payment: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: currentUser ? currentUser?.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(true);

    if (paymentResult?.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult?.paymentIntent?.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <form
      ref={form}
      className={`payment-form ${cartTotal === 0 && "disabled"}`}
      onSubmit={paymentHandler}
    >
      <div className="shipping-info-container">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={currentUser?.email || email}
        />
      </div>
      <div className="shipping-info-container">
        <label>Ship to</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          value={currentUser?.address || address}
        />
      </div>
      <main>
        <h2>Payment Details </h2>
        <CardElement />

        {/* <div className="input-group">
          <input
            className="custom-input-field"
            name="name"
            placeholder="Name on Card"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Card Number</label>
          <CardNumberElement
            options={elementOptions}
            className="custom-input-field"
          />
        </div>
        <div className="input-group">
          <div className="payment-form-columns">
            <div>
              <label>Expiration Date</label>
              <CardExpiryElement
                options={elementOptions}
                className="custom-input-field"
              />
            </div>

            <div>
              <label>CVC</label>
              <CardCvcElement
                options={elementOptions}
                className="custom-input-field"
              />
            </div>
            <input
              className="custom-input-field"
              name="number"
              placeholder="Zip Code"
              onChange={handleChange}
            />
          </div>
        </div> */}

        <div className="terms">
          <input type="checkbox" onChange={handleCheck} />

          <p className="accept-terms">
            Accept <Link href="#">terms and conditions</Link>.
          </p>
        </div>
        {/* {meta.isTouched && meta.error ? (
          <span className="span">Error: {meta.error}</span>
        ) : (
          <span className="span"></span>
        )} */}
        <div className="payment-button-container">
          <Button disabled>Pay now</Button>
        </div>
      </main>
    </form>
  );
};

export default Payment;
