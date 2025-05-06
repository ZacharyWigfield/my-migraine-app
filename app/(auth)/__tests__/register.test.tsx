import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Register from '../register';

//  Mock Firebase auth
const mockCreateUserWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: {} }));

jest.mock('@react-native-firebase/auth', () => () => ({
    createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword,
}));

describe('Register Screen', () => {
    it('renders all required inputs and the register button', () => {
        const { getByPlaceholderText, getByText } = render(<Register />);

        expect(getByPlaceholderText(/email/i)).toBeTruthy();
        expect(getByPlaceholderText(/password/i)).toBeTruthy();
        expect(getByText(/create/i)).toBeTruthy();
    });

    it('calls the registration function when the button is pressed', async () => {
        const { getByPlaceholderText, getByText } = render(<Register />);

        fireEvent.changeText(getByPlaceholderText(/email/i), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText(/password/i), 'securepassword');

        fireEvent.press(getByText(/create/i));

        await waitFor(() => {
            expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
                'test@example.com',
                'securepassword'
            );
        });

    });
});
