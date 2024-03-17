import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuth } from "../context/authContext";
import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


const addToFavorites = async (userId, movie) => {
  try {
    // Reference to the user's document in the users collection
    const userRef = doc(db, "users", userId);
    
    // Reference to the favorites subcollection within the user's document
    const favoritesRef = collection(userRef, "favorites");
    
    // Add the favorite data to the favorites subcollection
    const docRef = await addDoc(favoritesRef, movie);
    
    console.log("Favorite added with ID: ", docRef.id);
 } catch (error) {
    console.error("Error adding favorite: ", error);
 }
  }

const Card = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const banner = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
  const image_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const title = movie.original_title;
  const year = movie.release_date.toString().substring(0, 4);
  const id = movie.id;
  const rating = movie.vote_average.toFixed(1);
  const userId = getAuth()?.currentUser?.uid
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();


  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  const handleFavorite = (event, id) => {
    event.stopPropagation();
    if (!userLoggedIn) navigate("/login")
    else {
      setIsFavorite((prev) => !prev);
      addToFavorites(userId, {image: image_url, title: title, releaseYear: year, rating: rating, banner: banner})
    }
    

  };
  return (
    <div>
      <div
        className=" p-3 grid grid-flow-row gap-5 gap-y-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleClick(id)}
      >
        <div className=" w-60 ">
          <div className="relative">
            <img className="rounded-t-lg" src={image_url} alt="" />
            <div
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer z-50"
              onClick={(event) => handleFavorite(event, id)}
            >
              <Heart
                fill={isFavorite ? "red" : "white"}
                className={isFavorite ? `text-white` : `text-red-500`}
              />
            </div>
          </div>

          <div className="w-60 flex justify-between items-center rounded-b text-black bg-white  py-2">
            <div className="flex flex-col w-full b pl-4 pb-4">
              <Link to={`/movies/${id}`}>
                <div className=" w-40  text-lg  font-semibold  text-ellipsis">
                  {title}
                </div>
              </Link>
              <div className=" font-semibold  text-gray-700 text-sm text">
                {year}{" "}
              </div>
            </div>
            <div className=" mr-4 ">
              <p className="w-10 h-10  border-3 border-white ring-4 ring-orange-500 flex justify-center items-center text-lg p-2 bg-orange-500 rounded-full text-white">
                {rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
