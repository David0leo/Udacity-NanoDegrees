import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import { getAllCategories, getAllPosts, getCommentByCommentId} from './actions/ApiActions'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// first calls to api in order to get categories and posts
store.dispatch(getAllCategories())
store.dispatch(getAllPosts())
store.dispatch(getCommentByCommentId('test_comment_id'))
// store.dispatch(downVoteCommentByCommentId('test_comment_id'))
// store.dispatch(getCommentsByPostId("test_id"))
// store.dispatch(addComment({
//   id: 'test_comment_id',
//   timestamp: 0,
//   body: "test comment body",
//   author: "test comment author",
//   parentId: "test_id"
// }))
// store.dispatch(addNewPost(
//   {
//     id: 'test_id',
//     timestamp: 1467166872634,
//     title: 'This is a test add post',
//     body: 'this is a test body',
//     author: 'John Snow',
//     category: 'udacity',
    
//   }
// ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
