import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { MdAddCircle } from "react-icons/lib/md";

import PostCard from "./PostCard";
import CommentCard from "./CommentCard";
import ReadablePrimaryHeader from "./ReadablePrimaryHeader";
import ReadableEditPostCard from "./ReadableEditPostCard";
import ReadableNewCommentCard from "./ReadableNewCommentCard";
import ReadableEditCommentCard from "./ReadableEditCommentCard";

import {
	getPostById,
	getCommentsByPostId,
	updateCommentCountByPostId,
	editPost,
	addComment,
	editComment
} from "../actions/ApiActions";

import {
	toggleEditPostModalIsOpen,
	toggleNewCommentModalIsOpen,
	toggleEditCommentModalIsOpen,
	incrementNextCommentId
} from "../actions";

class PostDetailsView extends React.Component {
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.updateCommentCountByPostId(id);
	}

	render() {
		const { main, post } = this.props;

		let comments = this.props.comments;
		if (!Array.isArray(comments)) {
			comments = [comments];
		}

		return (
			<div className="post-details-view">
				<ReadablePrimaryHeader
					currentCategory={this.props.match.params.category}
				/>
				{!post.deleted ? (
					<div>
						<PostCard post={post} previewBody={false} />
						<button
							className="add-comment-button"
							onClick={this.props.toggleNewCommentModalIsOpen}
						>
							<MdAddCircle size={30} />
							Add Comment
						</button>
						<div className="comments-container">
							{comments.map(comment => (
								<CommentCard key={`comment_${comment.id}`} comment={comment} />
							))}
						</div>
						{main.editPostModalIsOpen && (
							<MuiThemeProvider muiTheme={getMuiTheme()}>
								<ReadableEditPostCard handleSubmit={this.handleEditPost} />
							</MuiThemeProvider>
						)}
						{main.newCommentModalIsOpen && (
							<MuiThemeProvider muiTheme={getMuiTheme()}>
								<ReadableNewCommentCard handleSubmit={this.handleNewComment} />
							</MuiThemeProvider>
						)}
						{main.editCommentModalIsOpen && (
							<MuiThemeProvider muiTheme={getMuiTheme()}>
								<ReadableEditCommentCard
									handleSubmit={this.handleEditComment}
								/>
							</MuiThemeProvider>
						)}
						<div className="main-footer" />
					</div>
				) : (
					<div>
						<br /> >> Oops, the post you are looking for has been deleted! :(
					</div>
				)}
			</div>
		);
	}

	handleEditPost = () => {
		let editedPost = this.props.form.readableEditPostCard.values;
		editedPost.timestamp = Date.now();
		this.props.editPost(editedPost);
		this.props.toggleEditPostModalIsOpen(editedPost);
	};

	handleNewComment = () => {
		let newComment = this.props.form.readableNewComment.values;
		newComment.timestamp = Date.now();
		newComment.parentId = this.props.post.id;
		newComment.id = this.props.main.nextCommentId;

		this.props.addComment(newComment);
		this.props.incrementNextCommentId();
		this.props.updateCommentCountByPostId(this.props.post.id);

		this.props.toggleNewCommentModalIsOpen();
	};

	handleEditComment = () => {
		let editedComment = this.props.form.readableEditComment.values;
		editedComment.timestamp = Date.now();
		this.props.editComment(editedComment);
		this.props.updateCommentCountByPostId(this.props.post.id);

		this.props.toggleEditCommentModalIsOpen();
	};
}

function mapStateToProps({ main, API, form }, props) {
	let post = {};
	let comments = [];
	const id = props.match.params.id;

	if (API.posts !== undefined) {
		API.posts.forEach(apiPost => {
			if (apiPost !== undefined && apiPost.id === id) {
				post = apiPost;
			}
		});
	}

	if (API.comments !== undefined) {
		comments = API.comments[id];
		if (comments === undefined) {
			comments = [];
		}
	}

	return {
		main,
		form,
		post: post,
		comments
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPostById: id => dispatch(getPostById(id)),
		getCommentsByPostId: id => dispatch(getCommentsByPostId(id)),
		updateCommentCountByPostId: id => dispatch(updateCommentCountByPostId(id)),
		editPost: data => dispatch(editPost(data)),
		toggleEditPostModalIsOpen: data =>
			dispatch(toggleEditPostModalIsOpen(data)),
		toggleNewCommentModalIsOpen: () => dispatch(toggleNewCommentModalIsOpen()),
		toggleEditCommentModalIsOpen: data =>
			dispatch(toggleEditCommentModalIsOpen(data)),
		addComment: comment => dispatch(addComment(comment)),
		editComment: data => dispatch(editComment(data)),
		incrementNextCommentId: () => dispatch(incrementNextCommentId())
	};
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(PostDetailsView)
);
