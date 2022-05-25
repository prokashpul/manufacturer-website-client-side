import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: order,
    isLoading,
    isError,
  } = useQuery("order", async () => {
    const res = await request({ url: `/myOrders/${user?.email}` });
    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  Title("My Order");
  console.log(order);
  return <div></div>;
};

export default MyOrders;
