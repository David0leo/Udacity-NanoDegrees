import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import {main, loadPost} from './reducers';
import API from './reducers/ApiReducers'
import {reducer as reduxFormReducer } from 'redux-form'
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import thunk from 'redux-thunk';

import MainView from './components/main/MainView'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    main,
    loadPost,
    API,
    form: reduxFormReducer,
    routing: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(middleware, thunk)
  )
)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>
      <Route path="/" >
        {/* <App></App> */}
        <MainView></MainView>
      </Route>
      <Route path="/:category/:id">
      </Route>
    </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
