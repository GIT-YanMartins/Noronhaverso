import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header, main and footer boxes", () => {
  render(<App />);
  expect(screen.getByText(/header/i)).toBeInTheDocument();
  expect(screen.getByText(/main/i)).toBeInTheDocument();
  expect(screen.getByText(/footer/i)).toBeInTheDocument();
});
