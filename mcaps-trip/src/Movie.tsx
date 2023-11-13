import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IMovie from "./interfaces/IMovie";



function Movie({movie}: IMovie) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        cursor: "pointer",
      }}
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </motion.div>
  );
}

export default Movie;
