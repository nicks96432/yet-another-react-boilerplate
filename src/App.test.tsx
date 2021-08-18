import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("should render correctly", () => {
        const { getByText, getByRole } = render(<App />);

        expect(getByText("React App")).toEqual(expect.any(HTMLElement));
        expect(getByRole("img")).toHaveAttribute("alt", "logo");
    });
});
