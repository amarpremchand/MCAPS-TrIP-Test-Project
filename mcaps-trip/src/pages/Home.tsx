import React from "react";
import { useState } from "react";
import Header from "../Header";
import MoviesList from "../MoviesList";

function Home() {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header title={title} setTitle={setTitle} setPage={setPage} />
      <MoviesList title={title} setPage={setPage} page={page} />
    </div>
  );
}

export default Home;
