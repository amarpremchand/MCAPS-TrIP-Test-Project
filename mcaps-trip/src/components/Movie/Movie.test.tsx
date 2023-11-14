import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Movie from "./Movie";
import { BrowserRouter } from "react-router-dom";

describe("Movie Component", () => {
  const mockMovie = {
    id: 123,
    title: "Test Movie",
    poster_path: "test_poster.jpg",
  };

  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Movie movie={mockMovie} key={0} />
      </BrowserRouter>
    );
    expect(screen.getByAltText(/test movie/i)).toBeInTheDocument();
  });

  test("displays the correct image", () => {
    render(
      <BrowserRouter>
        <Movie movie={mockMovie} key={0} />
      </BrowserRouter>
    );
    const image = screen.getByAltText(/test movie/i);
    expect(image).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${mockMovie.poster_path}`
    );
  });

  test("links to the correct path", () => {
    render(
      <BrowserRouter>
        <Movie movie={mockMovie} key={0} />
      </BrowserRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/movie/${mockMovie.id}`);
  });

  test("has hover animation", () => {
    render(
      <BrowserRouter>
        <Movie movie={mockMovie} key={0} />
      </BrowserRouter>
    );
    const div = screen.getByRole("link").parentNode;
    expect(div).toHaveStyle("cursor: pointer");
  });
});
