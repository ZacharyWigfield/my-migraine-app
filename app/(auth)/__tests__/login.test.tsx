// login.test.tsx
import { fireEvent, render, } from '@testing-library/react-native';
import Login from '../login';

describe('Login Screen', () => {
    it('renders the login form correctly', () => {
        const { getByPlaceholderText, getByText } = render(<Login />);

        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Register')).toBeTruthy();
    });

    it('calls the registration function when the button is pressed', () => {
            const { getByPlaceholderText, getByText } = render(<Login />);
            const handleLogin = jest.fn();
    
            fireEvent.changeText(getByPlaceholderText(/email/i), 'test@example.com');
            fireEvent.changeText(getByPlaceholderText(/password/i), 'securepassword');
    
            fireEvent.press(getByText(/login/i));
            expect(handleLogin).toHaveBeenCalled();
    
        });

});