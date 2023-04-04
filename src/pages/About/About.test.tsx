import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About', () => {
  test('it renders', () => {
    render(<About />);
  });
});
