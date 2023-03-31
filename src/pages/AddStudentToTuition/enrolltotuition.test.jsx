import {render, screen} from "@testing-library/react";
import {StudentContext} from "../../others/Context";
import EnrollToTuition from "./index";


describe('EnrollToTuition component render tests', () => {
    test('Should render ENROLL TO TUITION div element correctly', () => {
        render(
            <StudentContext.Provider value={{student: null, dispatch: null}}>
                <EnrollToTuition/>
            </StudentContext.Provider>
        );
        const divElement = screen.getByText('ENROLL TO TUITION');
        expect(divElement).toBeInTheDocument();
    })
})
