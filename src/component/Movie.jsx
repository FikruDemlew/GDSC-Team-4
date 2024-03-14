
import React, { useEffect, useState } from "react";
import Card from "./Card";
const Movie = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const api_key = "api_key=73b58a9360afb9413bd12ff78914ed79";
  const all_movie_api_reference =
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en&page=1&" +
    api_key;
  const popular_api_reference = `https://api.themoviedb.org/3/movie/popular?${api_key}&language=en-US`;
  const top_Rated_api_reference = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=en-US`;

  useEffect(() => {
    fetch(all_movie_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
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
  console.log(popular)

  return (
    <div>
      <div className="flex justify-center text-2xl bg-gray-500 text-white py-2 mt-10 font-serif ">
        <a href="#popular" className="mr-5 hover:text-gray-600">
          Popular
        </a>
        <a href="#toprated" className="hover:text-gray-600">
          TopRated
        </a>
      </div>
      <div className=" flex gap-3 p-5">
        <p className="text-2xl font-sans">Movies</p>
      </div>
      <div className=" flex flex-row flex-wrap justify-center select-none  px-6">
        {allMovies.map((movieResult) => (
          <Card key={movieResult.id} movie={movieResult} />
        ))}
      </div>

      <div className=" flex gap-3 p-5   ">
        <p className="text-2xl font-sans " id="popular">
          Popular
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center select-none  px-6">
        {popular.map((movieResult) => (
          <Card key={movieResult.id} movie={movieResult} />
        ))}
      </div>
      <div className="flex gap-3 p-5 mt-20" id="toprated">
        <p className="text-2xl   font-mono">Top Rated</p>
      </div>
      <div className=" flex flex-row flex-wrap justify-center select-none  px-6">
        {topRated.map((movieResult) => (
          <Card key={movieResult.id} movie={movieResult} />
        ))}
      </div>
    </div>
  );
};

export default Movie;