import React, { Component } from 'react';
import './App.css';
import * as API from '../utils/ReadableApi';
import PostCard from '../components/post-card/PostCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    );
  }
}

export default App;
