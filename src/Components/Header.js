import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/AppSlice";
import { Netflix_logo } from "../Utils/Constants";
import { IoMdSearch } from "react-icons/io";
import Search from "./Search/Search";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            Email: email,
            DisplayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearch = () => {
    setToggle(!toggle);
  };

  return (
    <div className="absolute px-8 mt-0 pt-0 py-1 bg-gradient-to-b  w-[100%]  from-black z-10 xs:pl-4 xs:pr-1 flex justify-between ">
      <img className="w-32 xs:w-24 " src={Netflix_logo} alt="logo" />
      {user && (
        <div className="text-white p-4 flex">
          {toggle && <Search />}
          {
            <button
              className=" mx-4 text-2xl -mt-3 xs:text-xl xs:mt-0 "
              onClick={handleSearch}
            >
              {!toggle ? <IoMdSearch /> : <IoMdCloseCircle />}
            </button>
          }
          <img
            alt="user"
            src={user?.photoURL}
            className="xs:w-6 xs:h-8 sm:w-8 sm:h-10 rounded-xl xs:mr-[2%] "
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 xs:w-14 xs:overflow-hidden xs:h-8 w-15 h-9 ml-1 py-1 px-2 rounded-lg hover:bg-red-800 hover:font-medium duration-150 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
