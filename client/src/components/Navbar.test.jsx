import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // To mock 'Link' component
import NavBar from "./NavBar.jsx";

describe("Navbar component", () => {
    const renderNavBar = () => {
        render(<NavBar />, { wrapper: MemoryRouter });
    };
    test("renders both links", () => {
        // render the navbar
        renderNavBar();
        // expect the links to be there or something
        expect(screen.getByText("Posts List")).toBeInTheDocument();
        expect(screen.getByText("Create New Post")).toBeInTheDocument();

    });
});