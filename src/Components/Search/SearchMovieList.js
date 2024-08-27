import React from "react";
import { Netflix_logo } from "../../Utils/Constants";
import { useSelector } from "react-redux";
import SearchMovieCard from "./SearchMovieCard";

const SearchMovieList = () => {
  const searchedMovies = useSelector((store) => store.details.searchMovies);
  // console.log(searchedMovies);

  if (!searchedMovies) return null;

  return (
    <div className=" bg-neutral-500  sm:h-[100%] text-white h-[100%] xs:bg-neutral-950 xs:h-[100%] xs:w-[100%]">
      <div className="absolute px-8 mt-0 pt-0 py-1 bg-gradient-to-b  w-[100%]  from-black z-10 xs:pl-4 flex justify-between ">
        <img className="w-32 xs:w-24" src={Netflix_logo} alt="logo" />
      </div>
      <div className="relative pt-20 flex -ml-3  w-screen h-full xs:pt-12 ">
        <div className="flex  flex-wrap justify-center  xs:ml-2 xs:py-2">
          {searchedMovies.map((movie) => (
            <SearchMovieCard movies={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovieList;
