import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hearder from './Hearder';

describe('About', () => {
  test('it renders', () => {
    render(<Hearder />);
  });
});
