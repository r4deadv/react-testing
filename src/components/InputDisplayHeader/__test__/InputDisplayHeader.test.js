import { render, screen, fireEvent } from "@testing-library/react";
import InputDisplayHeader from "../InputDisplayHeader";

it("should render Hello and a first name of the user", () => {
  render(<InputDisplayHeader firstNameVal={"Rade"} />);
  const headerElement = screen.getByRole("heading");
  expect(headerElement).toHaveTextContent("Rade");
});
