import { render, waitFor, screen, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import FormPage from './FormPage';
import renderWithProviders from '../../renderProvider';
afterEach(cleanup);
describe('FormPage component', () => {
  test('it renders', () => {
    renderWithProviders(<FormPage />);
  });
  test('it displays form', async () => {
    renderWithProviders(<FormPage />);
    const form = await waitFor(() => screen.getByTestId('form'));
    expect(form).toBeInTheDocument();
  });
  test('it should show error message when all the fields are not entered', async () => {
    renderWithProviders(<FormPage />);
    const buttonElement = screen.getByRole('button');
    await act(() => userEvent.click(buttonElement));
    //  await userEvent.click(buttonElement);
    const alertElement = screen.getByRole('warning');
    expect(alertElement).toBeInTheDocument();
  });
  it('should not show any error message when the component is loaded', () => {
    renderWithProviders(<FormPage />);
    const alertElement = screen.queryByRole('alert');
    expect(alertElement).not.toBeInTheDocument();
  });
});
