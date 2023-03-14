import {render, screen} from "@testing-library/react";
import {StudentContext} from "../../others/Context";
import UnEnrollFromTuition from "./index";


describe('UnEnrollFromTuition component render tests', () => {
    test('Should render UN ENROLL FROM TUITION div element correctly', () => {
        render(
            <StudentContext.Provider value={{student: { student: { tuitionId: 'tuitionId' } }, dispatch: null}}>
                <UnEnrollFromTuition/>
            </StudentContext.Provider>
        );
        const divElement = screen.getByText('UN ENROLL FROM TUITION');
        expect(divElement).toBeInTheDocument();
    })
})
