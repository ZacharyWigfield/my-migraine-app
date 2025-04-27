// login.test.tsx
import { render, } from '@testing-library/react-native';
import Login from '../login';

describe('Login Screen', () => {
    it('renders the login form correctly', () => {
        const { getByPlaceholderText, getByText } = render(<Login />);

        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Register')).toBeTruthy();
    });

});