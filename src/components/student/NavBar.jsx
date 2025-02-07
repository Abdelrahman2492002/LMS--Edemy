import { Link } from "react-router";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const NavBar = () => {
  const { navigate, isEducator, setIsEducator } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between border-b border-gray-700 bg-cyan-100/70 px-5 py-3 text-gray-500 md:py-5 lg:px-40">
      <Link to="/">
        <img src={assets.logo} alt="Website Logo" className="w-20 md:w-28" />
      </Link>
      <div className="hidden items-center gap-9 md:flex">
        {user && (
          <ul className="items-center gap-3 md:flex">
            <li>
              <button
                className="capitalize"
                onClick={() => navigate("/educator")}
              >
                {isEducator ? "educator dashboard" : "become educator"}
              </button>
            </li>
            <span>|</span>
            <Link to="/my-enrollments" className="cursor-pointer capitalize">
              my enrollments
            </Link>
          </ul>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="rounded-full bg-blue-700 px-7 py-3 font-normal text-white"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Small Screens */}

      <div className="flex items-center gap-2 md:hidden">
        {user && (
          <ul className="flex items-center gap-2 text-xs">
            <li className="cursor-pointer capitalize">become educator</li>
            <span>|</span>
            <Link to="/my-enrollments" className="cursor-pointer capitalize">
              my enrollments
            </Link>
          </ul>
        )}
        {user ? (
          <UserButton />
        ) : (
          <img
            onClick={() => openSignIn()}
            src={assets.user_icon}
            alt="user-icon"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
