import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders shared header, page content and footer", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByAltText(/noronhaverso cartoon/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /modelos 3d/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /sugestões/i })).toBeInTheDocument();
  expect(screen.getByText(/footer/i)).toBeInTheDocument();
});
