import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';

import Players from './players';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {  
    return (
      <Provider store={store}>
        <div className="main">
          <Players />
        </div>
      </Provider>
    );
  }
}

export default App;
