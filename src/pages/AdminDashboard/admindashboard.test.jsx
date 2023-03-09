import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {AuthContext} from "../../others/Context";
import AdminDashboard from "./index";

describe('AdminDashboard render component test', () => {
    test('Should render div element correctly', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={{auth: {user: {name: 'nawaz'}}}}>
                    <AdminDashboard />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const divElement = screen.getByText('ADMIN DASHBOARD');
        expect(divElement).toBeInTheDocument();
    });
})
