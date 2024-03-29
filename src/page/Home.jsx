import { useEffect, useState } from "react";
import Card from "../component/Card";
import { Search } from "../component/Search";
import { useAuth } from "../context/authContext";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
const Home = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const popular_api_reference = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`;
  const top_Rated_api_reference = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`;

  const { userLoggedIn } = useAuth();

  const fetchData = async () => {
    if (userLoggedIn) {
      const userId = getAuth()?.currentUser?.uid;
      try {
        const userRef = doc(db, "users", userId);
        const favoritesRef = collection(userRef, "favorites");
        const querySnapshot = await getDocs(favoritesRef);

        const favoritesData = querySnapshot.docs.map((doc) => ({
          favoriteId: doc.id,
          ...doc.data(),
        }));

        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error fetching favorites: ", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [userLoggedIn]);

  useEffect(() => {
    fetch(popular_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });

    fetch(top_Rated_api_reference)
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Search />
      <div className="flex flex-col gap-y-20 justify-center items-center w-full">
        <div className="w-[85%] flex flex-col justify-center items-center gap-4">
          <p className="text-2xl text-left w-[90%] font-sans ">Popular</p>
          <div className="flex flex-row flex-wrap justify-center items-center select-none  gap-x-5 px-5 w-full">
            {popular.map((movieResult) => (
              <Card
                key={movieResult.id}
                movie={movieResult}
                favoriteMovies={favorites}
              />
            ))}
          </div>
        </div>
        <div className="w-[85%] flex flex-col justify-center items-center gap-4">
          <p className="text-2xl text-left w-[90%] font-sans ">TopRated</p>
          <div className="flex flex-row flex-wrap justify-center items-center select-none  gap-x-5 px-5 w-full">
            {topRated.map((movieResult) => (
              <Card
                key={movieResult.id}
                movie={movieResult}
                favoriteMovies={favorites}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
