import React from "react";
import Contract from "./Contract/Contract";
const Portfolio = () => {
  return (
    <>
      <div className="md:w-[920px] w-[95%] mx-auto">
        <div className="md:grid grid-cols-1 md:grid-cols-3 my-10 shadow-lg ">
          <div className="col-span-3 ... md:bg-blue-300 bg-primary h-[220px] flex flex-col-reverse md:flex-row md:justify-between items-center">
            <div className="md:ml-16 py-5">
              <h2 className="md:text-5xl text-3xl font-bold">Prokash Pul</h2>
              <h3 className="md:text-3xl font-semibold text-2xl">
                Frontend Developer
              </h3>
            </div>
            <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]  relative md:mb-[-210px] md:mr-[70px] shadow-lg p-1 bg-accent">
              <img
                w-full
                h-full
                src="https://i.ibb.co/b10qTRS/prokash.jpg"
                alt="prokash"
              />
            </div>
          </div>
          <div className="md:col-span-2 ... h-[500px]">
            <div className="p-5 block md:hidden">
              <Contract></Contract>
            </div>
          </div>
          <div className="md:col-span-1 ... bg-primary md:pt-32 p-5 hidden md:block">
            <Contract></Contract>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
