import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import fetchMock from 'jest-fetch-mock';
describe('Home page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test('it renders', () => {
    const { container } = render(<Home />);
    expect(container.getElementsByClassName('home').length).toBe(1);
  });
  test('displays loading message when cards are null', () => {
    render(<Home />);
    expect(document.querySelector('.loading')).toHaveTextContent('Loading');
  });
  // test('renders users when API call succeeds', async () => {
  //   const fakeUsers = [
  //     { id: 1, name: 'Joe' },
  //     { id: 2, name: 'Tony' },
  //   ];
  //   fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => fakeUsers) });

  //   render(<Home />);

  //   expect(screen.getByRole('heading')).toHaveTextContent('List of Users');

  //   expect(await screen.findByText('Joe')).toBeInTheDocument();
  //   expect(await screen.findByText('Tony')).toBeInTheDocument();

  //   expect(screen.queryByText('No users found')).not.toBeInTheDocument();
  // });

  test('renders error when API call fails', async () => {});
});
