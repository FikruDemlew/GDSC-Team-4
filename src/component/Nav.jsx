import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 
  return (
    <div className="">
      <div className=" flex  justify-between py-5 bg-[#EBECEF]">
        <div className="px-5 ">Logo</div>
        <div className="text-gray-900 mr-44">
          <Link to="/" className="hover:text-gray-400 mr-7">
            Home
          </Link>
          <Link to="/favourite" className="hover:text-gray-400 mr-7">
            Favourite
          </Link>
          <Link to="/aboutus" className="hover:text-gray-400 mr-7">
            About Us{" "}
          </Link>
          <Link to="/login" className="hover:text-gray-400 mr-7">
            Login
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Nav;
