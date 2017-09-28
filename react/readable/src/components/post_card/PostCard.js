import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { postUnixTimeToSimplifiedTimeElapsedString } from "../../utils/helpers";
import ThumbVoter from "../card_parts/ThumbVoter";
import CommentsButton from "./CommentsButton";
import EditButton from "../card_parts/EditButton";
import DeleteButton from "../card_parts/DeleteButton";

import {
	upVotePostById,
	downVotePostById,
	getCommentsByPostId,
	updateCommentCountByPostId,
	deletePostById,
	editPost
} from "../../actions/ApiActions";
import { toggleEditPostModalIsOpen, initializeEditPost } from "../../actions";

class PostCard extends React.Component {
	componentDidMount() {
		this.props.updateCommentCountByPostId(this.props.post.id);
	}

	render() {
		const { post, previewBody } = this.props;
		return (
			<div className="post-card">
        <Link className="post-title" to={`/${post.category}/${post.id}`}>{post.title}</Link>
				{/* <h1 className="post-title">{post.title}</h1> */}
				<h2 className="post-category">{`/${post.category}`}</h2>
				<p className={`post-body ${previewBody ? "preview" : ""}`}>
					{post.body}
				</p>
				<p className="post-time">
					{"Posted "}
					{postUnixTimeToSimplifiedTimeElapsedString(
						Date.now(),
						post.timestamp
					)}{" "}
					by {post.author}
				</p>
				<CommentsButton
					commentsCount={post.commentCount || 0}
					to={`/${post.category}/${post.id}`}
				/>
				<ThumbVoter
					voteScore={post.voteScore}
					voteChangeCallback={this.handleVoteChange}
				/>
				<div className="modify-post-buttons">
					<EditButton onClick={this.handleEditPostModalOpen} />
					<DeleteButton onClick={this.handleDeletePost} />
				</div>
			</div>
		);
	}

	handleVoteChange = update => {
		if (update.option === "upVote") {
			this.props.upVotePostById(this.props.post.id);
		} else if (update.option === "downVote") {
			this.props.downVotePostById(this.props.post.id);
		}
	};

	handleDeletePost = () => {
    this.props.deletePostById(this.props.post.id);
    this.props.history.push('/');
	};

	handleEditPostModalOpen = () => {
		this.props.toggleEditPostModalIsOpen(this.props.post);
		this.props.initializeEditPost(this.props.post);
	};
}

function mapStateToProps({ API }) {
	return {
		comments: API.comments
	};
}

function mapDispatchToProps(dispatch) {
	return {
		upVotePostById: id => dispatch(upVotePostById(id)),
		downVotePostById: id => dispatch(downVotePostById(id)),
		getCommentsByPostId: id => dispatch(getCommentsByPostId(id)),
		updateCommentCountByPostId: id => dispatch(updateCommentCountByPostId(id)),
		deletePostById: id => dispatch(deletePostById(id)),
		editPost: data => dispatch(editPost(data)),
		toggleEditPostModalIsOpen: data =>
			dispatch(toggleEditPostModalIsOpen(data)),
		initializeEditPost: data => dispatch(initializeEditPost(data))
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostCard));
