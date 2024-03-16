import React, { useEffect, useState } from "react";
import Error from "./Error";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

import Loding from "./Loding";
const Movie = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading]  =  useState(true);
  const api_key = "api_key=73b58a9360afb9413bd12ff78914ed79";
  const all_movie_api_reference =
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en&page=1&" +
    api_key;
  const popular_api_reference = `https://api.themoviedb.org/3/movie/popular?${api_key}&language=en-US`;
  const top_Rated_api_reference = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=en-US`;

      const movie= 'Movies';
     const trend= 'Popular';
     const top = 'Top Rated';
  try {
  
      useEffect(() => {
      setTimeout(() => {
      fetch(all_movie_api_reference)
      .then((res) => res.json())
      .then((data) => { 
        setAllMovies(data.results)

     })
    fetch(popular_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results)
      })
      
    fetch(top_Rated_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results)
      })
   setLoading(false)
 },3000)
  }, [])
  } catch (error) {
     
  }

    return (
      <div>
        <div className="flex justify-center text-2xl bg-gray-500 text-white py-2 mt-10 font-serif ">
          <a href="#popular" className="mr-5 hover:text-gray-600">
            Popular
          </a>
          <a href="#toprated" className="hover:text-gray-600">
            Top Rated
          </a>
        </div>
        {loading ? (
          <Loding/>
        ) : (
          <div>
            <div className="  mx-20">
              <div className=" flex gap-3 p-5">
                <p className="text-3xl mt-10 font-sans font-light">{movie}</p>
              </div>
              <div
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7
        max-w-screen-2xl mx-auto"
              >
                {allMovies.map((movieResult) => (
                  <Card key={movieResult.id} movie={movieResult} />
                ))}
              </div>
            </div>
            <div className=" mx-20">
              <div className=" flex gap-3 p-5  mt-20 ">
                <p className="text-3xl font-sans  font-light" id="popular">
                  {trend}
                </p>
              </div>
              <div
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7
         max-w-screen-2xl mx-auto"
              >
                {popular.map((movieResult) => (
                  <Card key={movieResult.id} movie={movieResult} />
                ))}
              </div>
            </div>
            <div className="   mx-20 ">
              <div className="flex ml-auto p-5  mt-20" id="toprated">
                <p className="  text-3xl  font-sans font-light">{top}</p>
              </div>
              <div
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7
          max-w-screen-2xl mx-auto "
              >
                {topRated.map((movieResult) => (
                  <Card key={movieResult.id} movie={movieResult} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Movie;
