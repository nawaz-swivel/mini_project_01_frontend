import {render, screen} from "@testing-library/react";
import RemoveStudent from "./index";


describe('RemoveStudent Component render tests', () => {
    test('Should render REMOVE STUDENT div correctly', () => {
        render(<RemoveStudent/>);
        const divElement = screen.getByText('REMOVE STUDENT');
        expect(divElement).toBeInTheDocument();
    })
})
