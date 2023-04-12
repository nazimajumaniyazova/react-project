import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home page', () => {
  test('it renders', () => {
    const { container } = render(<Home />);
    expect(container.getElementsByClassName('home').length).toBe(1);
  });
  test('displays loading message when cards are null', () => {
    render(<Home />);
    expect(document.querySelector('.loading')).toHaveTextContent('Loading');
  });
});
