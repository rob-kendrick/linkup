import React from 'react';
import { Provider } from 'react-redux';
import store from './utilities/redux/store';

import './App.css';
import Test from './components/Test';

function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;
