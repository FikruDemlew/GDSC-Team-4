import React from "react";

const NotFound = ({search}) => {
  return (
    <div className="flex m justify-center items-center h-screen ">
      <div>
        <p className="capitalize mb-96 text-wrap text-center font w-56  text-xl font-semibold font-sans">
          {" "}
          no results for "{search}" please try-again{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
