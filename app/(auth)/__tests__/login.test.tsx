// login.test.tsx
import { fireEvent, render, waitFor, } from '@testing-library/react-native';
import Login from '../login';
import { AuthContext } from 'contexts/authContext';
import { signInWithEmailAndPassword } from '@react-native-firebase/auth';

const mockAuthContext = {
    auth: {
        currentUser: null,
    } as any,
    user: null,
    loading: false,
};

jest.mock('@react-native-firebase/auth', () => ({
    signInWithEmailAndPassword: jest.fn(),
}));

describe('Login Screen', () => {
    it('renders the login form correctly', () => {
        const { getByPlaceholderText, getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Login />
            </AuthContext.Provider>
        );

        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Register')).toBeTruthy();
    });

    it('updates email and password fields as user types', () => {
        const { getByPlaceholderText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Login />
            </AuthContext.Provider>
        );
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'securepassword');

        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('securepassword');
    });

    it('calls the login function when the button is pressed', async () => {
        const { getByPlaceholderText, getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Login />
            </AuthContext.Provider>
        );

        fireEvent.changeText(getByPlaceholderText(/email/i), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText(/password/i), 'securepassword');

        fireEvent.press(getByText(/login/i));
        await waitFor(() => {
            expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
                mockAuthContext.auth,
                'test@example.com',
                'securepassword'
            );
        });

    });

});