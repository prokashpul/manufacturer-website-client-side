import React, { useEffect, useState } from "react";
import Loader from "../../../Utilities/Loader/Loader";

import ReviewDetail from "./ReviewDetail/ReviewDetail";

const ClientReview = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://electric-tools-server.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
    setLoading(false);
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="md:max-w-[1080px] w-[95%] mx-auto my-20">
      <h2 className="font-bold text-4xl text-center my-10"> Client Reviews </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {[...review]
          ?.reverse()
          ?.slice(0, 6)
          ?.map((rev) => (
            <ReviewDetail rev={rev} key={rev._id}></ReviewDetail>
          ))}
      </div>
    </div>
  );
};

export default ClientReview;
