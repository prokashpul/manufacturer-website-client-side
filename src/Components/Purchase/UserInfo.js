import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import { request } from "../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../Utilities/Loader/Loader";

const UserInfo = () => {
  const [user] = useAuthState(auth);
  const userEmail = user.email;
  const { data, isLoading, isError } = useQuery("user", async () => {
    const res = await request({ url: `/user/${userEmail}` });
    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  return (
    <div className="mx-[855]ss">
      <h2 className="text-4xl font-bold">Name: {data.name}</h2>
      <p>Email: {data?.email}</p>
      <p>About : {data?.about}</p>
      <p>Phone: {data?.phone}</p>
      <h2>Address: {data?.address}</h2>
      <div></div>
    </div>
  );
};

export default UserInfo;
