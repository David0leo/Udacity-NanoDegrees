import React from "react";
import PostCard from "./PostCard";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ReadablePostsByCategoryList extends React.Component {
	render() {
		const { posts, categoryNavPaneIsOpen } = this.props;
		let filteredPosts = this.filterPosts(posts);
		return (
			<div
				className="readable-posts-by-category-list"
				style={categoryNavPaneIsOpen ? { flex: "4" } : { flex: "4" }}
			>
				<ReactCSSTransitionGroup
					transitionName="post-transition"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{filteredPosts.map(post => (
						<PostCard
							post={post}
							previewBody={true}
							key={`_post_card_${post.id}`}
						/>
					))}
				</ReactCSSTransitionGroup>
			</div>
		);
	}

	filterPosts = posts => {
		const { sortBy, sortOrderIsDescending, currentCategory } = this.props;

		let filteredPosts = [];
		if (posts) {
			if (currentCategory === "") {
				filteredPosts = posts.filter(post => !post.deleted);
			} else {
				filteredPosts = posts.filter(
					post => post.category === currentCategory && !post.deleted
				);
			}
		}

		filteredPosts.sort(function(a, b) {
			if (sortBy === "Vote Score") {
				if (sortOrderIsDescending) {
					return b.voteScore - a.voteScore;
				} else {
					return a.voteScore - b.voteScore;
				}
			} else if (sortBy === "Time Posted") {
				if (sortOrderIsDescending) {
					return b.timestamp - a.timestamp;
				} else {
					return a.timestamp - b.timestamp;
				}
			} else {
				return 0;
			}
		});
		return filteredPosts;
	};
}

function mapStateToProps({ main, API, routing }) {
	return {
		posts: API.posts,
		currentCategory: routing.location.pathname.slice(1),
		categoryNavPaneIsOpen: main.categoryNavPaneIsOpen,
		sortBy: main.sortBy,
		sortOrderIsDescending: main.sortOrderIsDescending
	};
}

export default withRouter(
	connect(mapStateToProps)(ReadablePostsByCategoryList)
);
