import { render, screen } from '@testing-library/react';

import Login from '../components/Login';

describe('Login unit test', () => {
  test('Render login component', () => {
    render(<Login />)
    expect(screen.getByRole('textbox'))
  })
})