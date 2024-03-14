const Card = ({ movie }) => {
  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const title = movie.title;
  const year = movie.release_date.toString().substring(0, 4);
  const rating = parseFloat(movie.vote_average).toFixed(1);
 
  
  return (
    <div>
      <div className=" p-3   grid grid-flow-row">
        <div className=" w-40 h-60 ">
          <img className="rounded-lg" src={image_url} alt="" />
        </div>
        <div className="flex flex-col rounded ">
          <div className=" w-40  text-s  font-semibold truncate font-serif">
            {title}
          </div>
          <div className=" flex font-semibold px-2  justify-between  text-gray-500 text-sm ">
            <p> {year}</p> <p>{rating}★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
