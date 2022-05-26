import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CheckoutForm from "../../../Components/CheckoutForm/CheckoutForm";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const stripePromise = loadStripe(
  "pk_test_51L0atQGsojxMCBEGOjCobionVxcEYXfQJLnIAaUfHzQv1n401xWh7dumcOJQHvyWlfE4miMU8JlfgHv3aOlrIbIS00QISYLmow"
);

const Getpayments = () => {
  const { id } = useParams();
  const {
    data: payments,
    isLoading,
    isError,
  } = useQuery("blogs", async () => {
    const res = await request({ url: `/order/${id}` });
    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  Title(payments?.productName);

  // console.log(payments);
  return (
    <div className=" flex flex-col justify-center items-center gap-5">
      {id}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <small className="text-emerald-500">
            Hello! {payments?.userName}
          </small>
          <h2 className="card-title">{payments?.productName}</h2>
          <p>Pay Amount: $ {payments?.totalPrice}</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm payments={payments} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Getpayments;
