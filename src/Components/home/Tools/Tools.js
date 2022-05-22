import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../Utilities/Loader/Loader";
import ToolsDetails from "./toolsDeatils/ToolsDetails";

const Tools = () => {
  const { data, isLoading } = useQuery(
    "tool",
    async () => await axios("product.json")
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  const tools = data?.data;
  return (
    <div className="md:max-w-[1080px] w-[95%] mx-auto my-10">
      <h2 className="font-bold text-5xl text-center my-10"> Our Tools </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <ToolsDetails tool={tool} key={tool._id}></ToolsDetails>
        ))}
      </div>
    </div>
  );
};

export default Tools;
