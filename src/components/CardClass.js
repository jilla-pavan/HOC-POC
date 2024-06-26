import React, { Component } from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    // here we can create the state variables, But here we are using redux toolkit to do so 

    console.log(props);
  }

  render() {
    const { original_title, poster_path } = this.props.movieData;

    return (
      <div className="bg-gray-400 rounded-lg w-[150px] h-[200px] m-2 ">
        <div className="flex justify-center items-center flex-col m-4">
          <img
            alt=""
            className="w-[140px] h-[120px] rounded-lg"
            src={"https://image.tmdb.org/t/p/w780" + poster_path}
          />
          <h1 className="font-bold  m-1 text-sm "> {original_title}</h1>
        </div>
      </div>
    );
  }
}
export default Card;
