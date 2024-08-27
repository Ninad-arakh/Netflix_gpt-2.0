import React from "react";
import { CDN_URL } from "../../Utils/Constants";
import { useNavigate } from "react-router-dom";

const SearchMovieCard = (props) => {
  // console.log("props ", props);
  const navigate = useNavigate();
  const { original_title, id, poster_path, vote_average, overview } =
    props.movies;
    const handleclick = ()=>{
        navigate("/watch?jbv="+id);
    }
  return (
    <div className="ml-8 w-[13%] xs:w-[30%] xs:ml-2 cursor-pointer hover:border group  hover:z-10 p-2 rounded-lg border-neutral-600" onClick={handleclick}>
      <img alt="poster" src={CDN_URL + poster_path} className="rounded-lg" />
      <div className="  opacity-0 group-hover:opacity-100 p-2 text-black  xs:text-white xs:opacity-100">
        <p className="text-xs font-bold xs:">{original_title}</p>
      </div>
    </div>
  );
};

export default SearchMovieCard;
