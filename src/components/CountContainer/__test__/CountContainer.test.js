import { render, screen, fireEvent } from "@testing-library/react";
import CountContainer from "../CountContainer";

describe("CounterContainer works", () => {
  it("should increment when + button is clicked", () => {
    render(<CountContainer />);
    const increment = screen.getByTestId("increment");

    expect(screen.getByText(/The count is 0/)).toBeVisible();
    fireEvent.click(increment);
    expect(screen.getByText(/The count is 1/)).toBeVisible();
  });

  it("should decrement when - button is clicked", () => {
    render(<CountContainer />);
    const decrement = screen.getByTestId("decrement");

    expect(screen.getByText(/The count is 0/)).toBeVisible();
    fireEvent.click(decrement);
    expect(screen.getByText(/The count is -1/)).toBeVisible();
  });
});
