import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home page', () => {
  test('it renders', () => {
    render(<Home />);
  });
});
