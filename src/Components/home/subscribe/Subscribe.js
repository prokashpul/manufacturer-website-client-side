import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div class="hero lg:w-[1080px] w-[95%] mx-auto my-10  shadow rounded-md">
        <div class="hero-content flex-col  p-10">
          <h2 className="text-center font-bold text-3xl my[-5">
            Subscribe Now
          </h2>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered rounded-r-none input-primary w-full max-w-xs"
            />
            <button className="btn rounded-l-none text-white btn-primary ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
