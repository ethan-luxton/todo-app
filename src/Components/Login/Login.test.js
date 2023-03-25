import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockLoginContext, mockLoginContext } from './mock';
import Login from './Login';

const mockLoginContextValue = {
    loggedIn: false,
    login: jest.fn(),
    logout: jest.fn(),
    can: jest.fn(),
  };

describe('Login component', () => {
    beforeEach(() => {
      render(
        <MockLoginContext.Provider value={mockLoginContextValue}>
          <Login />
        </MockLoginContext.Provider>
      );
    });
  
    test('renders login form', () => {
      expect(screen.getByPlaceholderText('login id')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  
    test('submits login form', () => {
      fireEvent.change(screen.getByPlaceholderText('login id'), {
        target: { value: 'username' },
      });
      fireEvent.change(screen.getByPlaceholderText('password'), {
        target: { value: 'password' },
      });
      fireEvent.click(screen.getByText('Login'));
  
      expect(mockLoginContext.login).toHaveBeenCalledWith('username', 'password');
    });
  });