// login.test.tsx
import { fireEvent, render, waitFor, } from '@testing-library/react-native';
import Login from '../login';

//  Mock Firebase auth
const mockSignInWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: {} }));

jest.mock('@react-native-firebase/auth', () => () => ({
    signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
}));

describe('Login Screen', () => {
    it('renders the login form correctly', () => {
        const { getByPlaceholderText, getByText } = render(<Login />);

        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Register')).toBeTruthy();
    });

    it('calls the registration function when the button is pressed', async () => {
        const { getByPlaceholderText, getByText } = render(<Login />);

        fireEvent.changeText(getByPlaceholderText(/email/i), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText(/password/i), 'securepassword');

        fireEvent.press(getByText(/login/i));
        await waitFor(() => {
            expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(
                'test@example.com',
                'securepassword'
            );
        });

    });

});