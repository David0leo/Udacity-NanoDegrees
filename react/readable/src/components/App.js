import React, { Component } from 'react';
import './App.css';
import * as API from '../utils/ReadableApi';
import CategoryView from '../components/CategoryView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryView posts={[{id:1}, {id:2}]}></CategoryView>
      </div>
    );
  }
}

export default App;
