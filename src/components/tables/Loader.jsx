import React from "react";

const CircularLoader = ({ size = "w-16 h-16" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${size} border-4 border-gray-300 border-t-customNavy rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default CircularLoader;
