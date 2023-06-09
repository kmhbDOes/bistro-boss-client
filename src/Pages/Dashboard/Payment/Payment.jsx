import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import CheckoutForm from "./CheckoutForm";

//  TO-Do : Provide Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Proceed To"></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
