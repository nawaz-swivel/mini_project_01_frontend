import {render, screen} from "@testing-library/react";
import TuitionReport from "./index";


describe('TuitionReport component rendering tests', () => {
    test('Should render TUITION PAYMENT REPORT div correctly', () => {
        render(<TuitionReport/>);
        const paymentReportDivElement = screen.getByText('TUITION PAYMENT REPORT');
        expect(paymentReportDivElement).toBeInTheDocument();
    })
})
