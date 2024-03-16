import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loding from "./Loding";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotFound from "./NotFound";

const SearchResult = () => {
  const [container, setContainer] = useState([]);
  const [search, setSearch] = useSearchParams("");
  const [loading, setLoading] = useState("");
  const query = search.get("q");

  useEffect(() => {
    fetchMe();
  }, [query]);
  const api_key = "api_key=6e2d744d3309baa3d82e2b292950c342";

  const fetchMe = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&${api_key}`
    )
      .then((response) => {
        console.log(response);
        const validation = response.ok;
        return response.json();
      })
      .then((data) => {
        setContainer(data.results);
      })
      .catch((err) => console.error(err));
    //    if (!Response.ok){
    //    <Loding/>

    // }
  };

  return (
    <div className="mx-28 ">
      <SearchBar />
      {query === null || query.length === 0||container.length===0 ? (
        <NotFound />
      ) : (
        <div>
          <p className=" capitalize my-10 font-sans font-thin text-2xl">
            Search results for: {query}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 max-w-screen-2xl mx-auto ">
            {container.map((movies) => (
              <Card key={movies.id} movie={movies} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
