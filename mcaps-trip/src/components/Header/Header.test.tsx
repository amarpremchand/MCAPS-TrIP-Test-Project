import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  // Test if Header renders correctly
  test("renders Header component", () => {
    render(
      <BrowserRouter>
        <Header
          title=""
          setTitle={jest.fn()}
          setPage={jest.fn()}
          withSearchField={true}
        />
      </BrowserRouter>
    );
    expect(screen.getByText("Movie-flix")).toBeInTheDocument();
  });

  // Test if search field is present when withSearchField is true
  test("renders search field when withSearchField is true", () => {
    render(
      <BrowserRouter>
        <Header
          title=""
          setTitle={jest.fn()}
          setPage={jest.fn()}
          withSearchField={true}
        />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});

test("calls setTitle and setPage on search input change", () => {
  const mockSetTitle = jest.fn();
  const mockSetPage = jest.fn();
  render(
    <BrowserRouter>
      <Header
        title=""
        setTitle={mockSetTitle}
        setPage={mockSetPage}
        withSearchField={true}
      />
    </BrowserRouter>
  );

  const input = screen.getByPlaceholderText(/Search.../i);
  fireEvent.change(input, { target: { value: "New Title" } });

  expect(mockSetTitle).toHaveBeenCalledWith("New Title");
  expect(mockSetPage).toHaveBeenCalledWith(1);
});

// Test if search field is not present when withSearchField is false
test("does not render search field when withSearchField is false", () => {
  render(
    <BrowserRouter>
      <Header withSearchField={false} />
    </BrowserRouter>
  );
  expect(screen.queryByPlaceholderText("Search...")).not.toBeInTheDocument();
});
