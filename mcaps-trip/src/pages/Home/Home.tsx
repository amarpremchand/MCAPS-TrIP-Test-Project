import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";

function Home() {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header
        title={title}
        setTitle={setTitle}
        setPage={setPage}
        withSearchField={true}
      />
      <MoviesList title={title} setPage={setPage} page={page} />
    </div>
  );
}

export default Home;
