import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {AuthContext} from "../../others/Context";
import StudentDashboard from "./index";


describe('StudentDashboard component render tests', () => {
    test('Should render welcome div correctly', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={{auth: { user: {name: 'Nawaz'} }}}>
                    <StudentDashboard/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        const welcomeDivElement = screen.getByText('WELCOME', {exact: false});
        expect(welcomeDivElement).toBeInTheDocument();
    })
})
