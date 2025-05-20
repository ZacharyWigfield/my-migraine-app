import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Register from '../register';
import { AuthContext } from 'contexts/authContext';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';

const mockAuthContext = {
    auth: {
        currentUser: null,
    } as any,
    user: null,
    loading: false,
};

jest.mock('@react-native-firebase/auth', () => ({
    createUserWithEmailAndPassword: jest.fn(),
}));

describe('Register Screen', () => {
    it('renders all required inputs and the register button', () => {
        const { getByPlaceholderText, getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Register />
            </AuthContext.Provider>
        );

        expect(getByPlaceholderText(/email/i)).toBeTruthy();
        expect(getByPlaceholderText(/password/i)).toBeTruthy();
        expect(getByText(/create/i)).toBeTruthy();
    });

    it('updates email and password fields as user types', () => {
        const { getByPlaceholderText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Register />
            </AuthContext.Provider>
        );
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'securepassword');

        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('securepassword');
    });

    it('calls the registration function when the button is pressed', async () => {
        const { getByPlaceholderText, getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <Register />
            </AuthContext.Provider>
        );

        fireEvent.changeText(getByPlaceholderText(/email/i), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText(/password/i), 'securepassword');

        fireEvent.press(getByText(/create/i));

        await waitFor(() => {
            expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
                mockAuthContext.auth,
                'test@example.com',
                'securepassword'
            );
        });

    });
});
