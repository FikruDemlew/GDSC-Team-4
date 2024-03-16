import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className=" flex justify-center items-center mx-44">
      <form className="flex justify-center ite" onSubmit={handleSubmit}>
        <input
          className=" font-sans text-xl capitalize flex  flex-grow h-10 outline-none  mr-2 pl-3  rounded-2xl  "
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button
          className="w-12 pl-2.5 h-10 border border-spacing-1 border-gray-200 rounded-3xl shadow-black shadow-2xl  bg-sky-700 hover:bg-sky-500" 
          type="submit"
        >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
