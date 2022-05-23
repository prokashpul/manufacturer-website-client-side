import React from "react";
import CountUp from "react-countup";

const BusinessSummary = () => {
  return (
    <div className="md:max-w-[1080px] w-[95%] mx-auto my-10">
      <h2 className="font-bold text-4xl text-center my-10">
        Our Business summary
      </h2>
      <div className="flex md:flex-row flex-col md:border gap-5 md:gap-0 shadow w-full overflow-hidden rounded-xl text-center">
        <div className="stat shadow-xl">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Happy customers</div>
          <div className="stat-value text-primary">
            <CountUp end={70} />+
          </div>
        </div>

        <div className="stat shadow-xl">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Annual revenue</div>
          <div className="stat-value text-primary">
            <CountUp end={15.5} />M
          </div>
        </div>

        <div className="stat shadow-xl">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Tools</div>
          <div className="stat-value text-primary">
            <CountUp end={100} />+
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
