import {render, screen} from "@testing-library/react";
import Table from "./index";

const testData = [{
    studentId: 'sid-123',
    name: 'nawaz',
    status: 'paid',
}];

describe('Table componet redering', () => {
    test('Should render Compact Table correctly', () => {
        render(<Table nodes={testData}/>);
        const compactTableElement = screen.getByRole('grid');
        expect(compactTableElement).toBeInTheDocument();
    })
})
