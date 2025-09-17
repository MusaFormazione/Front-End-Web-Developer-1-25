import { describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest' // IMPORANTE Aggiungerlo

import Title from "./Title";

describe("Title component", () => {
  it("renderizza correttamente il tema scuro", () => {
    const { container } = render(<Title theme="dark-theme">Dark Themed Title</Title>);
    const titleElement = screen.getByText("Dark Themed Title");
    expect(titleElement).toBeTruthy(); // Verifico solamnete che l'elemento esista
    expect(container.firstChild.classList).toContain("dark-theme");  // Verifica che la classe CSS sia applicata al primo figlio del container (h1 in questo caso)
    expect(container.firstChild.classList).toContain("p-3");  // Verifica che la classe CSS p-3 sia applicata al primo figlio del container (h1 in questo caso)
    const cssClass = container.querySelector(".dark-theme.p-3");
    expect(cssClass).toBeTruthy();
    expect(container.querySelector('.light-theme')).toBeFalsy();
  });

  it("renderizza correttamente il tema chiaro", () => {
    const { container } = render(<Title theme="light-theme">Light Themed Title</Title>);
    const titleElement = screen.getByText("Light Themed Title");
    expect(titleElement).toBeInTheDocument(); // Verifico che l'elemento esista utilizzando Jest DOM
    expect(container.firstChild.classList).toContain("light-theme");  // Verifica che la classe CSS sia applicata al primo figlio del container (h1 in questo caso)
    const cssClass = container.querySelector(".light-theme");
    expect(cssClass).toBeTruthy();
  });

  it("il componente renderizzato non deve avere + di 2 classi CSS", () => {
    const { container } = render(<Title theme="light-theme">Light Themed Title</Title>);
    expect(container.firstChild.classList).toHaveLength(2); // Verifica che il numero di classi CSS applicate sia esattamente 2
  });

});
