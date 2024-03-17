import { useState, useEffect } from "react";
import Card from "./Card";
export const Search = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [resultMovie, setResultMovie] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const search_api_reference = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=${api_key}&language=en-US`;
  useEffect(() => {
    fetch(search_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setResultMovie(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, [searchMovie]);
  console.log(resultMovie[0])
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center p-4 my-8 mt-16 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        CineSphere: The Ultimate Movie Hub
        </h1>

        <div className="relative p-2  rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-full p-3 w-full"
            placeholder="Search Movies..."
            value = {searchMovie}
            onChange={(event)=>{
              setSearchMovie(event.target.value);
            }}
          />

          <button type="submit" className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center select-none  gap-x-5 px-5 w-full">
            {resultMovie.map((movieResult) => (
              <Card key={movieResult.id} movie={movieResult} />
            ))}
          </div>
      </div>
    </div>
  );
};
