/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderReturn from './HeaderReturn';

describe('HeaderReturn component', () => {
  it('renders w/o resent btn when option is set to false', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HeaderReturn resetAvailability={false} text="Activity details" />
      </BrowserRouter>,
    );
    const parent = getByTestId('hr__option');
    expect(screen.getByRole('button', { name: 'IoIosArrowBack.svg' })).toBeInTheDocument();
    expect(parent).not.toContainHTML('<button class="hr__btnReset" type="button">Reset</button>');
  });
  it('renders with the reset button when resetAvailability is set to true and the callback is provided', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HeaderReturn resetAvailability text="Activity details" passedFunction={() => true} />
      </BrowserRouter>,
    );
    const parent = getByTestId('hr__option');
    expect(parent).toContainHTML('<button class="hr__btnReset" type="button">Reset</button>');
  });

  it('renders w/o the reset button when resetAvailability is set to true but no callback is provided', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HeaderReturn resetAvailability text="Activity details" />
      </BrowserRouter>,
    );
    const parent = getByTestId('hr__option');
    expect(parent).not.toContainHTML('<button class="hr__btnReset" type="button">Reset</button>');
  });
});
