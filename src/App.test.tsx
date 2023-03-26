import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('App component', () => {
  test('it renders', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
