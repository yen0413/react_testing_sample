import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../Toggle';

describe('<Toggle />', () => {
    it('should render OFF by default', () => {
        render(<Toggle />);

        expect(screen.getByText(/OFF/)).toBeInTheDocument();
    });

    it('should render ON when clicked', () => {
        render(<Toggle />); // render toggle button

        expect(screen.getByText(/OFF/)).toBeInTheDocument(); // check if the OFF string to be rendered
        fireEvent.click(screen.getByText(/OFF/)); // trigger click event on the element

        expect(screen.getByText(/ON/)).toBeInTheDocument(); // check if the ON string to be rendered after clicked
    });
});

//Explain:
//render(): render your component
//screen.getByText(): allow you to query an element
//fireEvent.click(): trigger a click event on an element
//toBeIntheDocument(): check if an element exists on the screen
