import {render, screen} from "@testing-library/react";
import Footer from "./index";

describe('Footer component rendering', () => {
    test('Should render html element footer correctly', () => {
        render(<Footer/>);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });
    test('Should render description paragraph correctly', () => {
        render(<Footer/>);
        const descriptionElement = screen.getByText('site is created', {exact: false});
        expect(descriptionElement).toBeInTheDocument();
    });
})
