import 'react-native-gesture-handler/jestSetup';

// jest.setup.js
import 'react-native-gesture-handler/jestSetup'; // Only include this if using gesture handler

// Mock simple navigation hooks temporarily
jest.mock('expo-router', () => ({
  Link: ({ children }) => <>{children}</>, 
  useRouter: jest.fn(() => ({
    replace: jest.fn(),  
    push: jest.fn(),     
  })),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({
    currentUser: null,
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { displayName: 'John Doe' } })),
  }),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { displayName: 'John Doe' } })),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { displayName: 'John Doe' } })),
}));

global.alert = jest.fn();