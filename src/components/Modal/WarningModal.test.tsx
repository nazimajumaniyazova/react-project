import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WarningModal from './WarningModal';

describe('About', () => {
  test('it renders', () => {
    render(<WarningModal />);
  });
});
