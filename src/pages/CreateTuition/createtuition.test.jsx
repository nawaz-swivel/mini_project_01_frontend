import {render, screen} from "@testing-library/react";
import CreateTuition from "./index";
import {TuitionContext} from "../../others/Context";

describe('CreateTuition component render tests', () => {
    test('Should render CREATE TUITION div element correctly', async () => {
        render(
            <TuitionContext.Provider value={{dispatch: null}}>
                <CreateTuition/>
            </TuitionContext.Provider>
        );
        const divElement = screen.getByText('CREATE TUITION');
        expect(divElement).toBeInTheDocument();
    })
})
