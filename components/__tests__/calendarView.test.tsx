import { render, fireEvent } from '@testing-library/react-native';
import { router } from 'expo-router';
import CalendarView from 'components/CalendarView';

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

// mock calendar -> button to test functionality
jest.mock('react-native-calendars', () => {
  const { Text, TouchableOpacity } = require('react-native');
  return {
    Calendar: ({ onDayPress }: { onDayPress: Function }) => (
      <TouchableOpacity onPress={() => onDayPress({ dateString: '2025-05-22' })}>
        <Text>Fake Calendar</Text>
      </TouchableOpacity>
    ),
  };
});

describe('Calendar View Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the calendar component', () => {
    const { getByText } = render(<CalendarView />);
    expect(getByText('Fake Calendar')).toBeTruthy();
  });

  it('navigates when a day is pressed', () => {
    const { getByText } = render(<CalendarView />);
    fireEvent.press(getByText('Fake Calendar'));
    expect(router.push).toHaveBeenCalledWith('/entry/2025-05-22');
  });
});
