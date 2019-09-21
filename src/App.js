import React from 'react';
import './scss/main.scss';
import { Provider } from 'react-redux';
import store from './store'
import Main from './containers/Main.js'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
