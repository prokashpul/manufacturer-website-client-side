import React from "react";

import ReactStars from "react-rating-stars-component";

const ReviewDetail = ({ rev }) => {
  const { dic, image, review, name } = rev || {};
  const reviewStar = {
    size: 30,
    value: parseInt(review),
    edit: false,
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body justify-center items-center">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="" />
            </div>
          </div>
          <ReactStars {...reviewStar} />
          <p>{dic.slice(0, 100)}...</p>
          <div className="card-actions justify-end font-bold">
            <p className="text-primary">_{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
