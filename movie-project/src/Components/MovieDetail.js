
import React from "react";
import { Link } from "react-router-dom";

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to="/movies">Back to Movie List</Link>
      <br />
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default MovieDetail;