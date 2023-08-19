import { render, screen } from "@testing-library/react";
import App from "../../App";

test("Renders Hello World!", () => {
  render(<App />);
  const textElement = screen.getByText(/Hello World!/i);
  expect(textElement).toBeInTheDocument();
});
