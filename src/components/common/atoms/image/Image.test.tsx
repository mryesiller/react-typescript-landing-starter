import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Logo from "./index"

afterEach(cleanup)

describe("Logo", () => {
  it("Should render successfully", () => {
    const { baseElement } = render(<Logo src="" alt="" />)
    expect(baseElement).toBeTruthy()
  })

  it("Image 'src' and 'alt' props are added", () => {
    const src = "test"
    const alt = "test"
    render(<Logo src={src} alt={alt} />)
    expect(screen.getByTestId("logo")).toHaveAttribute("src", src)
    expect(screen.getByTestId("logo")).toHaveAttribute("alt", alt)
  })

  it("Logo className works correctly", () => {
    render(<Logo src="" alt="" className="test-class" />)
    expect(screen.getByTestId("logo")).toBeTruthy()
  })
})
