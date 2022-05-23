import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const MyProfile = () => {
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
  Title(data.name, "Profile");
  return (
    <div>
      <div className="md:w-[780px] w-[95%] mx-auto">
        <div className="md:grid grid-cols-1 md:grid-cols-3 my-10 shadow-lg ">
          <div className="col-span-3 ...  bg-primary h-[220px] flex flex-col-reverse md:flex-row md:justify-between items-center">
            <div className="md:ml-16 py-5 text-center md:text-left">
              <h2 className="md:text-5xl text-3xl font-bold"> </h2>
            </div>
            <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]  relative md:mb-[-210px] md:mr-[70px]  p-1 md:bg-transparent">
              <img
                className="w-full h-full shadow-lg"
                src={
                  data?.image
                    ? data?.image
                    : "https://i.ibb.co/7jMg9Xq/circled-user.pngg"
                }
                alt={data?.name}
              />
            </div>
          </div>
          <div className="md:col-span-2 ... h-[500px] p-5">
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="md:text-4xl text-2xl font-bold mt-5 uppercase">
                  {data?.name}
                </h2>
                <span className="font-bold text-blue-700 mt-5">
                  ( Edit Profile )
                </span>
              </div>
              <div className="divider bg-primary md:bg-blue-300 h-1   md:w-[200px]"></div>
              <ul>
                <li className="flex gap-3 items-start ">
                  <span className="font-extrabold">Email:</span> {user?.email}
                </li>
                <li className="flex gap-3 items-start ">
                  <span className="font-extrabold">Address:</span>
                  {data?.address ? data?.address : "No..."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-extrabold">Phone:</span>{" "}
                  {data?.phone ? data?.phone : "No.."}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
