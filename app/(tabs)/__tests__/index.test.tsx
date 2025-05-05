import { fireEvent, render, } from '@testing-library/react-native';
import HomeScreen from '..';

describe('Login Screen', () => {
    it('renders the logout button correctly', () => {
        const { getByText } = render(<HomeScreen />);

        expect(getByText('Logout')).toBeTruthy();
    });

    it('calls the logout function when the logout button is pressed', () => {
        const { getByText } = render(<HomeScreen />);
        const handleLogout = jest.fn();

        fireEvent.press(getByText(/register/i));
        expect(handleLogout).toHaveBeenCalled();
    })

});