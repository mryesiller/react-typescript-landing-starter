import React from "react"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import Input from "./index"

afterEach(cleanup)

describe("Input", () => {
  it("Should render successfully", () => {
    const { baseElement } = render(<Input type="text" name="test" />)
    expect(baseElement).toBeTruthy()
  })

  it("Input has right type attribute", () => {
    render(<Input type="text" name="test" />)
    expect(screen.getByTestId("input")).toHaveAttribute("type", "text")
  })

  it("Input value works correctly", () => {
    let value = "test me"
    render(
      <Input
        type="text"
        name="test"
        onChange={(e) => e.target.value}
        value={value || ""}
      />
    )
    expect(screen.getByTestId("input")).toHaveValue("test me")
  })

  it("Input onChange works correctly", () => {
    const onChange = jest.fn()
    render(<Input type="text" name="test" onChange={onChange} />)
    fireEvent.change(screen.getByTestId("input"), { target: { value: "test" } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it("Input className works correctly", () => {
    render(<Input type="text" name="test" className="test-class" />)
    expect(screen.getByTestId("input")).toBeTruthy()
  })
})
