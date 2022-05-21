import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-16 h-16 border-t-transparent border-4 border-primary border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
