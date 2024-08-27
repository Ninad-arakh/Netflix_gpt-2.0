import React from "react";
import { Netflix_logo } from "../../Utils/Constants";
import { useSelector } from "react-redux";
import SearchMovieCard from "./SearchMovieCard";

const SearchMovieList = () => {
  const searchedMovies = useSelector((store) => store.details.searchMovies);
  console.log(searchedMovies);

  if (!searchedMovies) return null;
  
  return (
    <div className=" bg-neutral-500 text-white h-screen w-screen">
      <div className="absolute px-8 mt-0 pt-0 py-1 bg-gradient-to-b  w-[100%]  from-black z-10 xs:pl-4 flex justify-between ">
        <img className="w-32 xs:w-24" src={Netflix_logo} alt="logo" />
      </div>
      <div className="relative pt-20">
        {searchedMovies.map((movie) => (
          <SearchMovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovieList;
