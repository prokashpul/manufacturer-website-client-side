import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import ToolsDetails from "./toolsDeatils/ToolsDetails";

const Tools = () => {
  const { data, isLoading, isError } = useQuery("tool", async () => {
    const res = await request({ url: "/tools" });
    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  // console.log(data);
  const tools = data;
  return (
    <div className="md:max-w-[1080px] w-[95%] mx-auto my-10">
      <h2 className="font-bold text-4xl text-center my-10"> Our Tools </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {[...tools]
          ?.reverse()
          ?.slice(0, 6)
          ?.map((tool) => (
            <ToolsDetails tool={tool} key={tool._id}></ToolsDetails>
          ))}
      </div>
    </div>
  );
};

export default Tools;
