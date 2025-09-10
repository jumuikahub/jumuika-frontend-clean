import { render, screen } from "@testing-library/react";
import React from "react";

describe("Smoke Test", () => {
  it("renders a simple JSX element", () => {
    render(<div>Hello Jumuika</div>);
    expect(screen.getByText("Hello Jumuika")).toBeInTheDocument();
  });
});
