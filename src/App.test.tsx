import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('it renders', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
    await act(() => userEvent.click(screen.getByText(/about us/i)));
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
