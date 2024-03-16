import React, { useState } from "react";
import Movie from "../component/Movie";
import SearchBar from "../component/SearchBar";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#EBECEF] ">
        <SearchBar />

        <Movie />
      </div>
    </div>
  );
};

export default Home;
