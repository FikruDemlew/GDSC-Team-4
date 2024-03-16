import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { Search } from "../component/Search";
const Home = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const api_key = "api_key=500f8710dfe90e56d66d96eb867fab60";
  const popular_api_reference = `https://api.themoviedb.org/3/movie/popular?${api_key}&language=en-US`;
  const top_Rated_api_reference = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=en-US`;

  useEffect(() => {
    fetch(popular_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });

    fetch(top_Rated_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  return (
    <div >
     <Search/>
      <div className=" flex gap-3 p-5   ">
        <p className="text-2xl font-sans  font">Popular</p>
      </div>
      <div className=" flex-row flex-wrap flex select-none d p-5">
        {popular.map((movieResult) => (
          <Card  key= {movieResult.id}movie={movieResult} />
        ))}
      </div>
      <div className="flex gap-3 p-5 mt-20">
        <p className="text-2xl   font-mono">TopRated</p>
      </div>
      <div className=" flex-row flex-wrap flex select-none d p-5">
        {topRated.map((movieResult) => (
          <Card key={movieResult.id} movie={movieResult} />
        ))}
      </div>
    </div>
  );
};

export default Home;


