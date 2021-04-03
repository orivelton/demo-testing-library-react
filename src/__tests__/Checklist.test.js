import { fireEvent, render, screen } from '@testing-library/react';
import Checklist from '../components/Checklist';

describe('Checklist component unit test', () => {
  test('Render Checklist component', () => {
    const { getByRole, debug } = render(<Checklist options={['Eat', 'Code', 'Sleep']}/>);
    const eatCheckbox = getByRole('checkbox', { name: 'Eat' });
    const codeCheckbox = getByRole('checkbox', { name: 'Code' });
    const sleepCheckbox = getByRole('checkbox', { name: 'Sleep' });

    screen.logTestingPlaygroundURL()

    expect(eatCheckbox).toBeInTheDocument();
    expect(codeCheckbox).toBeInTheDocument();
    expect(sleepCheckbox).toBeInTheDocument();

    fireEvent.click(eatCheckbox);
    expect(getByText(/0/i))
    fireEvent.click(codeCheckbox);
    fireEvent.click(sleepCheckbox);
    expect(eatCheckbox.checked).toEqual(true);
    
    expect(codeCheckbox.checked).toEqual(true);
    expect(sleepCheckbox.checked).toEqual(true);

    fireEvent.click(eatCheckbox);
    expect(eatCheckbox.checked).toEqual(false);

    //yarn test --coverage  
  })
})

