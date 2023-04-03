import { render, waitFor, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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
});
