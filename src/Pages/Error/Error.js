import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../Utilities/PathTitle/PathTitle";

const Error = () => {
  Title("Page Not Found");
  const navigate = useNavigate();
  return (
    <div className="md:min-h-screen grid md:grid-flow-col  justify-center items-center md:gap-5 bg-primary py-10 md:py-2">
      <div className="flex flex-col shrink-0 justify-center gap-5 items-center">
        <h3 className="font-bold text-3xl">Oops !</h3>
        <h2 className="font-bold text-8xl">404</h2>
        <p>It look like you can't move forward</p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-outline btn-secondary my-5"
        >
          Back To Home
        </button>
      </div>
      <img
        className="w-full"
        src="https://i.ibb.co/NjJF2cQ/attachment-r-removebg-preview.png"
        alt="Not Found"
      />
    </div>
  );
};

export default Error;
