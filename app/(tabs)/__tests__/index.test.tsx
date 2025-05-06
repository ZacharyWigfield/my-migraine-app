import { fireEvent, render, waitFor, } from '@testing-library/react-native';
import HomeScreen from '..';

const mockSignOut = jest.fn(() => Promise.resolve({ user: {} }));

jest.mock('@react-native-firebase/auth', () => () => ({
    signOut: mockSignOut,
}));

describe('Login Screen', () => {
    it('renders the logout button correctly', () => {
        const { getByText } = render(<HomeScreen />);

        expect(getByText('Logout')).toBeTruthy();
    });

    it('calls the logout function when the logout button is pressed', async () => {
        const { getByText } = render(<HomeScreen />);

        fireEvent.press(getByText(/logout/i));
        await waitFor(() => {
            expect(mockSignOut).toHaveBeenCalled();
        });
    })

});