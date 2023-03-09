import {render, screen} from "@testing-library/react";
import Register from "./index";
import {AuthContext, StudentContext} from "../../others/Context";
import {MemoryRouter} from "react-router-dom";


describe('Register component render tests', () => {
    test('Should render Welcome para correctly', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={{
                    auth: {
                        user: null,
                    },
                    dispatch: null,
                }}>
                    <StudentContext.Provider value={{
                        dispatch: null,
                    }}>
                        <Register/>
                    </StudentContext.Provider>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        const welcomeParaElement = screen.getByText('Welcome!.', {exact: false});
        expect(welcomeParaElement).toBeInTheDocument();
    })
})
