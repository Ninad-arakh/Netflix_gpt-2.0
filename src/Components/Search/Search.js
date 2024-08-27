import React, { useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { API_OPTIONS } from "../../Utils/Constants";
import { useDispatch } from "react-redux";
import { setSearchMovies } from "../../Utils/MovieDetailsSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const query = useRef();
  const [searchResults, setSearchResults] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSearchMoies = () => {
    console.log("searchResults", searchResults);
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchResults +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(setSearchMovies(response?.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (searchResults !== null && searchResults !== undefined) {
      getSearchMoies();
      navigate("/search");
    }
  }, [searchResults]);

  const SearchTheQuery = () => {
    setSearchResults(query.current.value);
    
  };
  return (
    <div>
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={query}
          type="text"
          placeholder="search here"
          required
          className="px-2 py-1 bg-gray-600 text-white rounded-l-lg h-8 mt-1"
        />
        <button
          className="bg-gray-800 px-2 m h-8 mt-1 rounded-r-lg"
          onClick={SearchTheQuery}
        >
          <IoMdSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
