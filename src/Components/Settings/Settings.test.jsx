import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Settings from './Settings.jsx';
import { SettingsProvider } from '../settingsContext';

describe('Settings Component Tests', () => {
  test('render the settings form as expected', () => {
    render(
      <SettingsProvider>
        <Settings />
      </SettingsProvider>
    );

    // Check for the form elements
    const itemsPerPageLabel = screen.getByText(/Items per page:/i);
    const itemsPerPageInput = screen.getByText(/Items per page:/i);
    const showCompletedLabel = screen.getByText(/Show completed items:/i);
    const showCompletedInput = screen.getByText(/Show completed items:/i);

    expect(itemsPerPageLabel).toBeInTheDocument();
    expect(itemsPerPageInput).toBeInTheDocument();
    expect(showCompletedLabel).toBeInTheDocument();
    expect(showCompletedInput).toBeInTheDocument();
  });
});
