import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import { IProps } from './SearchBar';
let handleSubmit: IProps;
describe('SearchBar', () => {
  test('it renders', () => {
    render(<SearchBar {...handleSubmit} />);
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();
  });
  test('input field working correctly', async () => {
    render(<SearchBar {...handleSubmit} />);
    const input = screen.getByRole('textbox');

    await act(() => userEvent.type(input, 'hello'));
    expect(input).toHaveDisplayValue('hello');
  });
});
