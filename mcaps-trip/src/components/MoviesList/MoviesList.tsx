import React from "react";
import Movie from "../Movie/MovieComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import IMovieProps from "../../interfaces/IMovieProps";
import IMoviesList from "../../interfaces/IMoviesList";

function MoviesList({ title, page, setPage }: IMoviesList) {
  const [filteredMovies, setFilteredMovies] = useState<IMovieProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = title ? `/search-movies` : `/movies`;
      let params: { page: number; title?: string } = { page: page };

      if (title && endpoint === "/search-movies") {
        params.title = title;
      }

      const response = await axios.get(endpoint, { params });

      if (page > 1) {
        setFilteredMovies([...filteredMovies, ...response.data.results]);
      } else {
        setFilteredMovies(response.data.results);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, page]);

  return (
    <InfiniteScroll
      dataLength={filteredMovies.length}
      next={() => setPage(page + 1)}
      hasMore={true}
      loader={null}
      data-testid="mock-movies-list"
    >
      <div className="container">
        <div className="row mt-3">
          {filteredMovies.length > 0
            ? filteredMovies.map((movie: IMovieProps) => (
                <div className="col-2 mb-3">
                  <Movie movie={movie} key={movie.id} />
                </div>
              ))
            : " "}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default MoviesList;
