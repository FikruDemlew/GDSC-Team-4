export const Search = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center p-4 my-8 mt-16 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          McqMate Search
        </h1>

        <div className="relative p-2  rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-full p-3 w-full"
            placeholder="Search MCQ | Topic | Course"
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
      </div>
    </div>
  );
};
