import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Button from "./index"

afterEach(cleanup)

describe("Button", () => {
  it("Should render successfully", () => {
    const { baseElement } = render(<Button>{`Click me`}</Button>)
    expect(baseElement).toBeTruthy()
  })

  it("Button has right TextContent", () => {
    let text = "click me"
    render(<Button>{text}</Button>)
    expect(screen.getByTestId("button")).toHaveTextContent("click me")
  })

  it("Button onClick works correctly", () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>{`Click me`}</Button>)
    screen.getByTestId("button").click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("Button className works correctly", () => {
    render(<Button className="test-class">{`Click me`}</Button>)
    expect(screen.getByTestId("button")).toBeTruthy()
  })
})
