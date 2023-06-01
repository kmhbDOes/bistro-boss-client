import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";

//  TO-Do : Provide Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Proceed To"></SectionTitle>
      <h2 className="text-3xl text-emerald-500 text-center">
        Teka mane tejpata
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
