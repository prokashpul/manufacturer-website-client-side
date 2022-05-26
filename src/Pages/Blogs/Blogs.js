import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import BlogDetails from "../../Components/Blogs/BlogDetails";
import { request } from "../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../Utilities/Loader/Loader";
import Title from "../../Utilities/PathTitle/PathTitle";

const Blogs = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery("blogs", async () => {
    const res = await request({ url: `/blogs` });
    return res?.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  Title("My Blogs Q & A ");
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">My Blogs</h2>
      {[...blogs]?.reverse()?.map((post, index) => (
        <BlogDetails index={index} post={post} key={post?._id}></BlogDetails>
      ))}
    </div>
  );
};

export default Blogs;
