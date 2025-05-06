export default {
    initializeApp: jest.fn(() => ({
      auth: jest.fn(),
    })),
    app: jest.fn(() => ({
      auth: jest.fn(),
    })),
  };