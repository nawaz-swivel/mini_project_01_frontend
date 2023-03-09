import {render, screen} from "@testing-library/react";
import Spinner from "./index";

describe('Spinner component rendering', () => {
    test('Should render 2 div elements correctly', () => {
        const {container} = render(<Spinner/>);
        const containerElement = container.getElementsByClassName('lds-container');
        expect(containerElement.item(0)).toBeInTheDocument()
    });
})
