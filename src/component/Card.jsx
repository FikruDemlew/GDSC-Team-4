const Card = ({ movie }) => {
  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const title = movie.title;
  const year = movie.release_date.toString().substring(0, 4);
  const rating = parseFloat(movie.vote_average).toFixed(1);

  return (
    <div className=" my-1.5 overflow-hidden rounded-xl  transition-transform duration-300 ease-in-out transform hover:-translate-y-4  hover:filte  border-gray-500  shadow-2xl mx-0.5 cursor-pointer">
      <div className="">
        <div className=" py-2   px-0.5 ">
          <img
            className="  select-none shadow-2xl rounded-xl"
            src={image_url}
            alt=""
          />
        </div>
        <div className="flex flex-col rounded ">
          <div className="px-2 w-40  text-s  font-semibold truncate font-sans">
            {title}
          </div>
          <div className=" my-1 flex font-semibold px-2  justify-between  text-gray-500 text-sm ">
            <p> {year}</p> <p>{rating}★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
