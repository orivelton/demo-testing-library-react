import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('Render App component', () => {
    const { getByText } = render(<App />);
    expect(getByText(/total:/i)).toBeInTheDocument();
  })
});
