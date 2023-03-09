import {render, screen} from "@testing-library/react";
import Header from "./index";

describe('Header component rendering', () => {
    test('Should render html element header correctly', () => {
        render(<Header/>);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });
    test('Should render html element heading correctly', () => {
        render(<Header/>);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
    });
})
