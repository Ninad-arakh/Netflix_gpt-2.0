import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/AppSlice";
import { Netflix_logo } from "../Utils/Constants";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const query = useRef();

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

  const SearchTheQuery = ()=> {
    const searchQuery = query.current.value;
  }

  return (
    <div className="absolute px-8 mt-0 pt-0 py-1 bg-gradient-to-b  w-[100%]  from-black z-10 xs:pl-4 flex justify-between ">
      <img className="w-32 xs:w-24" src={Netflix_logo} alt="logo" />
      {user && (
        <div className="text-white p-4 flex">
          {toggle && (
            <div className="flex">
              <input
                ref={query}
                type="text"
                placeholder="search here"
                className="px-2 py-1 bg-gray-600 text-white rounded-l-lg h-8 mt-1"
                onSubmit={(e) => e.preventDefault()}
              />
              <button className="bg-gray-800 px-2 m h-8 mt-1 rounded-r-lg" onClick={SearchTheQuery}><IoMdSearch /></button>
            </div>
          )}
          {
            <button className=" mx-4 text-2xl -mt-3" onClick={handleSearch}>
              <IoMdSearch />
            </button>
          }
          <img
            alt="user"
            src={user?.photoURL}
            className="xs:w-6 xs:h-8 sm:w-8 sm:h-10 rounded-xl "
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 xs:w-13 xs:h-8 w-15 h-9 ml-1 py-1 px-2 rounded-lg hover:bg-red-800 hover:font-medium duration-150"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
