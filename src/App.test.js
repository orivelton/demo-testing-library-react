import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const props = ['Eat', 'Code', 'Sleep'];

describe('Checklist component unit test', () => {
  test('Render Checklist component', () => {
    const { getByText, debug } = render(<App />);
    expect(getByText(/total:/i)).toBeInTheDocument();
  })
})

