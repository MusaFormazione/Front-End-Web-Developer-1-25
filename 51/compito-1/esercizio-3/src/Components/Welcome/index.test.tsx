import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"


import Welcome from "."

describe("Welcome Component", () => {
  it("renders the correct message", () => {
    render(<Welcome message="Hello World" type="h1" />)
    const heading = screen.getByRole("heading", { name: /hello world/i })
    expect(heading).toBeInTheDocument()
  })

  it("renders a paragraph by default", () => {
    render(<Welcome message="Hello World" />)
    const paragraph = screen.getByText(/hello world/i)
    expect(paragraph).toBeInTheDocument()
  })
})
