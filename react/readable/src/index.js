import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Route } from "react-router";
import createHistory from "history/createBrowserHistory";
import { main, load } from "./reducers";
import API from "./reducers/ApiReducers";
import { reducer as reduxFormReducer } from "redux-form";
import { Provider } from "react-redux";
import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware
} from "react-router-redux";
import { getAllCategories, getAllPosts } from "./actions/ApiActions";

import thunk from "redux-thunk";

import MainView from "./components/main/MainView";
import PostDetailsView from "./components/PostDetailsView";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	combineReducers({
		main,
		load,
		API,
		form: reduxFormReducer,
		routing: routerReducer
	}),
	composeEnhancers(applyMiddleware(middleware, thunk))
);

store.dispatch(getAllCategories());
store.dispatch(getAllPosts());

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/">
					<MainView currenCategory={"all"} />
				</Route>
				<Route exact path="/:category">
					<MainView />
				</Route>
				<Route exact path="/:category/:id">
					<PostDetailsView />
				</Route>
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
