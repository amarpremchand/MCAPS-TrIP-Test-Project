import React from "react";
import { render, screen } from "@testing-library/react";
import MovieHeader from "./MovieHeader";

jest.mock("../Header/Header", () => () => <div data-testid="mock-header" />);

describe("MovieHeader component", () => {
  test("renders MovieHeader component with Header", () => {
    render(<MovieHeader />);

    // Check if the Header component is present
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
  });
});
