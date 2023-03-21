import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import * as React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './pages/About/About';

test('event route', async () => {
  const FAKE_EVENT = { name: 'test event' };
  const routes = [
    {
      path: 'about-us/',
      element: <About />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/', 'about-us/'],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);

  await waitFor(() => screen.getByRole('About'));
  expect(screen.getByRole('About')).toHaveTextContent(FAKE_EVENT.name);
});
