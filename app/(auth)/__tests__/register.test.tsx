import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Register from '../register';

describe('Register Screen', () => {
    it('renders all required inputs and the register button', () => {
        const { getByPlaceholderText, getByText } = render(<Register />);

        expect(getByPlaceholderText(/email/i)).toBeTruthy();
        expect(getByPlaceholderText(/password/i)).toBeTruthy();
        expect(getByText(/register/i)).toBeTruthy();
    });

    it('calls the registration function when the button is pressed', () => {
        const { getByPlaceholderText, getByText } = render(<Register />);

        fireEvent.changeText(getByPlaceholderText(/email/i), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText(/password/i), 'securepassword');

        fireEvent.press(getByText(/register/i));

    });
});
