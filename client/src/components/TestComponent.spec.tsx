/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  waitFor,
} from '@testing-library/react';
import store from '../utilities/redux/store';
import TestComponent from './TestComponent';
import '@testing-library/jest-dom';

describe('', () => {
  it('renders the users', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
    );
    await waitFor(() => expect(getByText('Kostas')).toBeInTheDocument());
  });
});
