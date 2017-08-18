import React, { Component } from 'react';
import './App.css';
import * as API from '../utils/ReadableApi';
import CategoryView from '../components/CategoryView'
import PostDetailsView from '../components/PostDetailsView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryView posts={[{id:1}, {id:2}]}></CategoryView>
        <PostDetailsView post={[{id:3}]} comments={[{id:5}, {id: 6}]}></PostDetailsView>
      </div>
    );
  }
}

export default App;
