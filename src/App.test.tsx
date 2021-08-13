import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("should render correctly", () => {
        act(() => void render(<App />));
        const app = screen.getByText(/React App/);
        expect(app).toBeInTheDocument();
        expect(app).toHaveAttribute("class", "app");
    });
});
