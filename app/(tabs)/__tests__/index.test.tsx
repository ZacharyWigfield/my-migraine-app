import { fireEvent, render, waitFor, } from '@testing-library/react-native';
import HomeScreen from '..';
import { AuthContext } from 'contexts/authContext';
import { signOut } from '@react-native-firebase/auth';

const mockAuthContext = {
    auth: {
        currentUser: null,
    } as any,
    user: null,
    loading: false,
};

jest.mock('@react-native-firebase/auth', () => ({
    signOut: jest.fn(),
}));

describe('Login Screen', () => {
    it('renders the logout button correctly', () => {
        const { getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <HomeScreen />
            </AuthContext.Provider>
        );

        expect(getByText('Logout')).toBeTruthy();
    });

    it('calls the logout function when the logout button is pressed', async () => {
        const { getByText } = render(
            <AuthContext.Provider value={mockAuthContext}>
                <HomeScreen />
            </AuthContext.Provider>
        );

        fireEvent.press(getByText(/logout/i));
        await waitFor(() => {
            expect(signOut).toHaveBeenCalled();
        });
    })

});