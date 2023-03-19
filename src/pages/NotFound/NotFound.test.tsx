import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './NotFound';

describe('Not Found', () => {
  test('it renders', () => {
    render(<NotFound />);
  });
});
