import { Link } from "react-router-dom";
const Card = ({ movie }) => {
  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const title = movie.original_title;
  const year = movie.release_date.toString().substring(0, 4);
  const id = movie.id
  return (
    <div>
      <div className=" p-3   grid grid-flow-row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className=" w-40 h-60 ">
          <img className="rounded-lg" src={image_url} alt="" />
        </div>
        <div className="flex flex-col rounded bg-gray-300">
          <Link to={`/movies/${id}`}>
          <div className=" w-40  text-s  font-semibold  text-ellipsis">
            {title}
          </div>
          </Link>
          <div className=" font-semibold  text-gray-500 text-sm text">
            {year}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
