

import { fireEvent, render, screen } from '@testing-library/react';
import Checklist from '../components/Checklist';

const props = ['Eat', 'Code', 'Sleep'];

describe('Checklist component', () => {
  test('Render Checklist component', () => {
    //yarn test --coverage --watchAll
    const { getByRole, debug } = render(<Checklist options={props}/>);

    const eatCheckbox = getByRole('checkbox', { name: 'Eat' });
    const codeCheckbox = getByRole('checkbox', { name: 'Code' });
    const sleepCheckbox = getByRole('checkbox', { name: 'Sleep' });
    const result = getByRole('spinbutton');

    // screen.logTestingPlaygroundURL();

    expect(eatCheckbox).toBeInTheDocument();
    expect(codeCheckbox).toBeInTheDocument();
    expect(sleepCheckbox).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    
    // eatCheckbox
    fireEvent.click(eatCheckbox);
    expect(eatCheckbox.checked).toEqual(true);
    expect(+result.value).toEqual(1);

    //codeCheckbox
    fireEvent.click(codeCheckbox);
    expect(codeCheckbox.checked).toEqual(true);
    expect(+result.value).toEqual(2);

    //sleepCheckbox
    fireEvent.click(sleepCheckbox);
    expect(sleepCheckbox.checked).toEqual(true);
    expect(+result.value).toEqual(3);
    
    //eatCheckbox
    fireEvent.click(eatCheckbox);
    expect(eatCheckbox.checked).toEqual(false);
    expect(+result.value).toEqual(2);

    //yarn test --coverage --watchAll
  })
})

