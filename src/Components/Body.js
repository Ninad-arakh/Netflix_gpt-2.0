import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import Error from "./Error";
import Watch from "./Watch";
import SearchMovieList from "./Search/SearchMovieList";

const Body = () => {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "watch",
      element: <Watch />,
    },
    {
      path: "search",
      element: <SearchMovieList />
    },
    {
      path: "error",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
