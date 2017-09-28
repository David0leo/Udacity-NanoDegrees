import React from "react";
import "../../style/css/ReadableAppStyle.css";
import ReadablePrimaryHeader from "../ReadablePrimaryHeader";
import MainSecondaryHeader from "./secondary_header/MainSecondaryHeader";
import MainCategoryNavPane from "./MainCategoryNavPane";
import ReadablePostsByCategoryList from "./ReadablePostsByCategoryList";
import ReadableNewPostCard from "../post_card/dialogs/ReadableNewPostCard";
import ReadableEditPostCard from "../post_card/dialogs/ReadableEditPostCard";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
	toggleCategoryNav,
	toggleSortOrderIsDescending,
	updateCurrentCategory,
	toggleNewPostModalIsOpen,
	toggleEditPostModalIsOpen,
	incrementNextPostId
} from "../../actions";

import {
	getAllCategories,
	getAllPosts,
	addNewPost as addPost,
	editPost
} from "../../actions/ApiActions";

class MainView extends React.Component {
	render() {
		const { main } = this.props;
		let currentCategory = this.props.match.params.category;
		if (currentCategory === undefined) {
			currentCategory = "all";
		}
		return (
			<div className="main-view">
				<ReadablePrimaryHeader currentCategory={currentCategory} />
				<MainSecondaryHeader
					size={40}
					newPostCallback={this.handleNewPostModalOpen}
					sortCallback={this.sortPosts}
					toggleNavPaneCallback={this.handleNavPaneToggle}
				/>

				<div className="main-body-container">
					<MainCategoryNavPane
						currentCategory={currentCategory}
						navPaneIsOpen={main.categoryNavIsOpen}
					/>
					<ReadablePostsByCategoryList />
				</div>
				<div className="main-footer" />
				<MuiThemeProvider muiTheme={getMuiTheme()}>
					<ReadableNewPostCard
						categories={main.categories}
						handleSubmit={this.addNewPost}
					/>
				</MuiThemeProvider>
				{main.editPostModalIsOpen && (
					<MuiThemeProvider muiTheme={getMuiTheme()}>
						<ReadableEditPostCard handleSubmit={this.handleEditPost} />
					</MuiThemeProvider>
				)}
			</div>
		);
	}

	// for these functions, change to arrow notation if want access to this.

	addNewPost = () => {
		let newPost = this.props.form.readableNewPostCard.values;
		newPost.id = this.props.main.nextPostId;
		newPost.timestamp = Date.now();
		this.props.addPost(newPost);
		this.props.incrementNextPostId();

		this.handleNewPostModalClose();
	};

	sortPosts(sortKey, sortOrderIsDescending) {
		console.log(
			`Sorting with key ${sortKey} and it is ${sortOrderIsDescending} that it is descending`
		);
	}

	handleNavPaneToggle = () => {
		this.props.toggleCategoryNav();
	};

	handleNewPostModalOpen = () => {
		//Open and close is the same because just toggling
		this.props.toggleNewPostModalIsOpen();
	};

	handleNewPostModalClose = () => {
		this.props.toggleNewPostModalIsOpen();
	};

	handleEditPost = () => {
		let editedPost = this.props.form.readableEditPostCard.values;
		editedPost.timestamp = Date.now();
		this.props.editPost(editedPost);
		this.handleEditPostModalClose(editedPost);
	};

	handleEditPostModalClose = post => {
		this.props.toggleEditPostModalIsOpen(post);
	};
}

function mapStateToProps({ main, form }) {
	return {
		main,
		form
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleCategoryNav: () => dispatch(toggleCategoryNav()),
		// updateSortBy: (data) => dispatch(updateSortBy(data)),
		toggleSortOrderIsDescending: () => dispatch(toggleSortOrderIsDescending()),
		updateCurrentCategory: data => dispatch(updateCurrentCategory(data)),
		toggleNewPostModalIsOpen: () => dispatch(toggleNewPostModalIsOpen()),
		incrementNextPostId: () => dispatch(incrementNextPostId()),
		addPost: data => dispatch(addPost(data)),
		getAllCategories: () => dispatch(getAllCategories()),
		getAllPosts: () => dispatch(getAllPosts()),
		toggleEditPostModalIsOpen: data =>
			dispatch(toggleEditPostModalIsOpen(data)),
		editPost: data => dispatch(editPost(data))
	};
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(MainView)
);
