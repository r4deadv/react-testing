import { fireEvent, render, screen } from "@testing-library/react";
import NameInput from "../NameInput";

describe("NameInput", () => {
  it("will be visible on screen", () => {
    render(<NameInput />);
    const firstNameVal = screen.getByText(/first name:/i);
    expect(firstNameVal).toBeVisible();
  });

  it("will be visible on screen with query", () => {
    render(<NameInput />);
    const firstNameVal = screen.queryByText(/first name:/i);
    expect(firstNameVal).toBeVisible();
  });

  it("will be visible on screen with find", async () => {
    render(<NameInput />);
    const firstNameVal = await screen.findByText(/first name:/i);
    expect(firstNameVal).toBeVisible();
  });

  it("should be able to type into input and update its value", () => {
    render(<NameInput />);
    const firstNameInput = screen.getByPlaceholderText("Type first name here");
    fireEvent.change(firstNameInput, { target: { value: "Rade" } });
    expect(firstNameInput.value).toBe("Rade");
  });
});
