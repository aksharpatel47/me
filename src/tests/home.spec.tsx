import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../app/page";

describe("Home", () => {
  it("should render the home page", () => {
    render(<Home />);

    expect(screen.getByText("Akshar Patel!!")).toBeInTheDocument();
  });
});
