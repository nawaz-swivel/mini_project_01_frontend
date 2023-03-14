import {render, screen} from "@testing-library/react";
import RemoveTuition from "./index";


describe('RemoveTuition Component render tests', () => {
    test('Should render REMOVE TUITION div correctly', () => {
        render(<RemoveTuition/>);
        const divElement = screen.getByText('REMOVE TUITION');
        expect(divElement).toBeInTheDocument();
    })
})
