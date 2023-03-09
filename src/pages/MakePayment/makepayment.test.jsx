import {render, screen} from "@testing-library/react";
import MakePayment from "./index";
import {StudentContext} from "../../others/Context";


describe('MakePayment component render tests', () => {
    test('Should render MAKE PAYMENT SCREEN div correctly', () => {
        render(
            <StudentContext.Provider value={{student: null, dispatch: null}}>
                <MakePayment/>
            </StudentContext.Provider>
        );
        const makePaymentDivElement = screen.getByText('MAKE PAYMENT SCREEN');
        expect(makePaymentDivElement).toBeInTheDocument();
    })
})
