import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('it renders', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
  });
});
