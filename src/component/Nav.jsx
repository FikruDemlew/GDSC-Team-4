import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";
import { getAuth } from "firebase/auth";
import { Popcorn } from "lucide-react";

const Nav = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <div className="bg-gray-950 text-white">
      {userLoggedIn ? (
        <div className="flex justify-between py-5 ">
          <div className="px-5 "><Popcorn/></div>
          <div className="text-white mr-44 gap-7 flex justify-center items-center">
            <Link to="/">Home</Link>
            <Link to="/favorite">Favourite</Link>
            <Link to="/about">About Us </Link>

            <img
              src={getAuth()?.currentUser?.photoURL}
              alt="person-male--v3"
              className="w-10 h-10 rounded-full"
            />
            <div
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="text-sm bg-white px-3 py-2 rounded text-black cursor-pointer"
            >
              Logout
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between py-4 ">
          <div className="px-5 "><Popcorn/></div>
          <div className="flex justify-center items-center gap-7 mr-10">
            <Link to="/" className="">
              Home
            </Link>
           
            <Link to="/about" className="hover:text-gray-400 mr-7">
              About Us{" "}
            </Link>
            <div className="inline-flex">
              <Link
                to="/login"
                className="text-sm bg-white px-3 py-2 rounded text-black cursor-pointer"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
