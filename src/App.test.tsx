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
    // const user = userEvent.setup();
    // verify page content for default route
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
    // verify page content for expected route after navigating
    await act(() => userEvent.click(screen.getByText(/about us/i)));
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    //
    // await act(() => userEvent.click(screen.getByText(/forms/i)));
    // expect(screen.getByText(/Save your favourite movie/i)).toBeInTheDocument();
  });
});
