import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = ({ payments }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [paySuccess, setPaySuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice, email, userName, _id } = payments || {};
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://electric-tools-server.herokuapp.com/create-payment-intent`, {
      method: "POST",

      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setPaySuccess("");
    } else {
      setCardError("");
    }
    const { paymentIntent, error: IntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });
    if (IntentError) {
      setCardError(IntentError.message);
    } else {
      setSpinner(true);
      setCardError("");
      setTransactionId(paymentIntent.id);
      setPaySuccess("Payment is successful ! ");
      // patch api
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://electric-tools-server.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Payment successfully");
          navigate("/dashboard/my-order");
          setSpinner(false);
        });
    }
  };
  if (spinner) {
    return (
      <>
        <span type="button" class="text-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </span>
      </>
    );
  }
  return (
    <div>
      {cardError && <p className="text-red-500 my-3">{cardError}</p>}
      {paySuccess && (
        <p className="text-primary my-3">
          {paySuccess}
          <span className="ml-3 text-accent">and your transactionId is</span>
          <span className="ml-3 text-secondary">{transactionId}</span>
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn  btn-primary btn-sm my-5"
          type="submit"
          disabled={!stripe || !clientSecret || paySuccess}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
