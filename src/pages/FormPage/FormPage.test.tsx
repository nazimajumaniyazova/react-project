import { render, waitFor, screen, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import FormPage from './FormPage';
afterEach(cleanup);
describe('FormPage component', () => {
  test('it renders', () => {
    render(<FormPage />);
  });
  test('it displays form', async () => {
    render(<FormPage />);
    const form = await waitFor(() => screen.getByTestId('form'));
    expect(form).toBeInTheDocument();
  });
  test('it should show error message when all the fields are not entered', async () => {
    render(<FormPage />);
    const buttonElement = screen.getByRole('button');
    await act(() => userEvent.click(buttonElement));
    //  await userEvent.click(buttonElement);
    const alertElement = screen.getByRole('warning');
    expect(alertElement).toBeInTheDocument();
  });
});
