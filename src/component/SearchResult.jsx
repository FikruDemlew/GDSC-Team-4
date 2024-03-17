import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loding from "./Loding";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotFound from "./NotFound";

const SearchResult = () => {
  const [container, setContainer] = useState([]);
  const [search, setSearch] = useSearchParams("");
  const [loading, setLoading] = useState(false);
  const query = search.get("q");
  // const [state,setState] = useState(true);
let res;
  
 useEffect(() => {
fetchMe();
setTimeout(()=>{
  setLoading(res)
},2000)
 
}, [query]);
  
 
  const api_key = "api_key=6e2d744d3309baa3d82e2b292950c342";

  const fetchMe =  () => {
   fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&${api_key}`
    )
      .then((response) => {
        console.log(response.getstatus);
        res = response.ok 
        return response.json();
      })
      .then((data) => {
        setContainer(data.results);
      })
      .catch((err) =>
         console.log(err)
         );
  };
 

  return (
    <div className="mx-28 ">
      <SearchBar />

    {!loading && < Loding/>} 
      {query === null || query.length === 0 ? (
        <NotFound search={query} />
      ) : (
        <div>
          <p className=" capitalize my-10 font-sans font-thin text-2xl">
            Search results for: {query}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 max-w-screen-2xl mx-auto ">
            {container.map(
              (movies) =>
              (movies.poster_path) && (
                  <Card key={movies.id} movie={movies} />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
