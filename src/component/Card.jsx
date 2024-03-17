const Card = ({ movie }) => {
  let noImage=false
  if(!movie.poster_path && !movie.backdrop_path){
    noImage=true;
  }
  const image_url = `https://image.tmdb.org/t/p/w500${
    movie.poster_path || movie.backdrop_path
  }`;
  console.log(movie)
  const title = movie.title;
  const year = movie.release_date.toString().substring(0, 4);
  const rating = parseFloat(movie.vote_average).toFixed(1);
  
  return (
    <div className=" my-1.5 overflow-hidden rounded-xl  transition-transform duration-300 ease-in-out transform hover:-translate-y-4  hover:filte  border-gray-500  shadow-2xl mx-0.5 cursor-pointer hover: ">
      <div className="">
        <div className=" pb-2   px-0.5 ">
          {noImage ? (
            <div className="">
              <img
                loading="lazy"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt=""
              />
            </div>
          ) : (
            <img
              loading="lazy"
              className=" filter  select-none shadow-2xl rounded-xl"
              src={image_url}
              alt=""
            />
          )}<div class=" absolute bottom-10 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 hover:animate-pulse  bg-gradient-to-b"></div>
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
