import React, { useEffect } from "react";
import Card from "./CardClass";
import { API_URl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieItem } from "../utils/movieSlice";

const List = () => {
 
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movie.movieItems);

  const fetchAPIData = async () => {
    const data = await fetch(API_URl);
    const json = await data.json();
    dispatch(addMovieItem(json?.results));
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    movies && (
      <div className="bg-gray-600 m-1 h-[250px] w-full flex items-center overflow-x-scroll rounded-lg">
        <div className="flex ">
          {/* <Card movieData={movie} /> */}
          {movies.map((x, i) => {
            return <Card key={i} movieData={x} />;
          })}
        </div>
      </div>
    )
  );
};

export default List;
