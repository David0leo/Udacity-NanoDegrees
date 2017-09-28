import React from "react";
import { connect } from "react-redux";
import "./App.css";
// import * as API from '../utils/ReadableApi';
import { getAllCategories, getAllPosts } from "../actions/ApiActions";
import { withRouter } from "react-router";

class App extends React.Component {
	componentDidMount() {
		this.props.getAllCategories();
		this.props.getAllPosts();
	}

	render() {
		return (
			<div className="App">
				<MainView currentCategory={this.props.currentCategory} />
			</div>
		);
	}
}

function mapStateToProps({ routing }) {
	return {
		currentCategory: routing.location.pathname.slice(1)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getAllCategories: () => dispatch(getAllCategories()),
		getAllPosts: () => dispatch(getAllPosts())
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
