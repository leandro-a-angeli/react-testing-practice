 
import { screen } from "@testing-library/react";
import { Header } from "../../components/Header";
import { renderWithProviders } from "../../utils/test-utils";

describe("Header" , ()=>{
    it("should render the header with login link when not authenticated", () => {
        renderWithProviders(<Header />, { route: '/' });
        expect(screen.getByText(/login/i)).toBeInTheDocument(); 
    })
    it("renders the Home link in the header", () => {
        renderWithProviders(<Header />, { route: '/' });
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    })
})