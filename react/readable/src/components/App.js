import React, { Component } from 'react';
import './App.css';
import * as API from '../utils/ReadableApi';
import MainView from './MainView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainView></MainView>
      </div>
    );
  }
}

export default App;
