import React from 'react';

export const mockLoginContext = {
  loggedIn: false,
  user: {},
  token: null,
  error: null,
  login: jest.fn(),
  logout: jest.fn(),
  can: jest.fn(),
};

export const MockLoginContext = React.createContext(mockLoginContext);