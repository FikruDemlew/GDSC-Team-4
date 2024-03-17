import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Assuming you have a firebase.js file where you initialize Firebase
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { getAuth } from "firebase/auth";
import Card from "../component/FavoriteCard";

const Favorite = () => {
  const [data, setData] = useState([]);
  const { userLoggedIn } = useAuth();

  const fetchData = async () => {
    if (userLoggedIn) {
      const userId = getAuth()?.currentUser?.uid;
      try {
        const userRef = doc(db, "users", userId);
        const favoritesRef = collection(userRef, "favorites");
        const querySnapshot = await getDocs(favoritesRef);

        const favoritesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(favoritesData);
      } catch (error) {
        console.error("Error fetching favorites: ", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [userLoggedIn]);

  return (
    <div className="min-h-[70vh]">
      <div className="w-[85%] flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl m-6 font-bold text-center w-[90%] font-sans ">
          Your Favorite Movies
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center select-none  gap-x-5 px-5 w-full">
          {data.map((movieResult) => (
            <Card key={movieResult.id} movie={movieResult} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
