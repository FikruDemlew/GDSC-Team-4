import { Link } from "react-router-dom";

const Card = ({ movie,showDescription }) => {
  const id = movie.id;
  const value = `/description/${id}`;
  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const title = movie.original_title;
  const year = movie.release_date.toString().substring(0, 4);
  const description = movie.overview;
  const rating = parseFloat(movie.vote_average).toFixed(1);
  const release_date = movie.release_date;

  console.log(movie);

  return (
    <div >
      {
       !showDescription &&  <Link to={value}>
        <div className="p-3 card-container transition-transform duration-300 ease-in-out transform hover:-translate-y-4">
          <div>   
          </div>
          <div className="w-40 h-60">
            <img className="rounded-lg hover:shadow-gray-700 shadow-2xl " src={image_url}  />
          </div>
          <div className="flex flex-col rounded">
            <div className="w-40 text-s font-semibold text-ellipsis font-serif">
              {title}
            </div>
            <div className="font-semibold text-gray-500 text-sm text flex px-2  justify-between  ">
            <p> {year}</p> <p>{rating}★</p>
            </div>
          </div>
        </div>
      </Link>
      }
      {
        showDescription && <div className="lg:flex px-10 mt-20 bg-[#EBECEF]">
          <div>
           <img className="rounded-lg" src={image_url} />
          </div>
          <div className="mt-10 ml-10 ">
            <div className="text-3xl font-serif "> {title} </div>
            <div className="text-gray-600 mt-16">
            <span className="text-gray-950 font-sans font-bold mr-">Rating: </span>
           <p className="ml-1 inline-block">{rating}</p> ⭐
          </div>
            <div className="text-gray-600 mt-3"> <span className="text-gray-950 font-sans font-bold mr-1 ">Relesed: </span> {release_date} </div>
            <div className="leading-8 font-serif text-gray-600 mt-3 break-words">  <span className="text-gray-950 font-sans font-bold mr-1 ">Spoiler🥳 :</span>  {description} </div>
            <Link to='/' className="ml-96 text-teal-900 underline font-bold">Back</Link>
          </div>
        </div>
      }
     
    </div>
  );
};

export default Card;
