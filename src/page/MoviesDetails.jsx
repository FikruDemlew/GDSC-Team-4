import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    rating: 0,
    desc: "",
    image: "",
    releaseDate: "",
    backdropPath: "",
    status: "",
  });
  const { id } = useParams();

  const detail_api_reference = `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;

  useEffect(() => {
    fetch(detail_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails((prev) => ({
          ...prev,
          title: data.title,
          rating: data.vote_average.toFixed(1),
          desc: data.overview,
          image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          releaseDate: data.release_date,
          backdropPath: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
          status: data.status,
        }));
      });
    console.log(id);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center sm:py-12  min-h-screen">
        <div className="py-3  w-[70%]">
          <div className="bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-8 flex justify-center items-center space-x-8 ">
            <div className="w-full mx-auto">
              <img
                className="rounded-3xl shadow-lg w-2/3 mx-auto"
                src={movieDetails.image}
                alt=""
              />
            </div>

            <div className="flex flex-col w-full space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{movieDetails.title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                  {movieDetails.rating}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Movie</div>
                <div className="text-lg text-gray-800">
                  {movieDetails.releaseDate}
                </div>
              </div>
              <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                {movieDetails.desc}
              </p>
              <div>
                <div className="text-sm text-gray-400">Status</div>
                <div className="text-lg text-gray-800">
                  {movieDetails.status}
                </div>
              </div>
              <div className="">
                <img
                  className="rounded-3xl shadow-lg w-full"
                  src={movieDetails.backdropPath}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
