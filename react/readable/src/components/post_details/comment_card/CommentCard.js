import React from "react";
import { connect } from "react-redux";

import { postUnixTimeToSimplifiedTimeElapsedString } from "../../../utils/helpers";
import ThumbVoter from "../../card_parts/ThumbVoter";
import EditButton from "../../card_parts/EditButton";
import DeleteButton from "../../card_parts/DeleteButton";

import {
	deleteCommentByCommentId,
	upVoteCommentByCommentId,
	downVoteCommentByCommentId,
	updateCommentCountByPostId
} from "../../../actions/ApiActions";
import {
	toggleEditCommentModalIsOpen,
	initializeEditComment
} from "../../../actions";

class CommentCard extends React.Component {
	render() {
		const comment = this.props.comment;
		return (
			<div className="comment-card">
				<h1 className="comment-author">{comment.author}</h1>
				<p className="comment-time">
					{postUnixTimeToSimplifiedTimeElapsedString(
						Date.now(),
						comment.timestamp
					)}
				</p>
				<p className="comment-body">{comment.body}</p>
				<ThumbVoter
					voteScore={comment.voteScore}
					thumbSize={20}
					voteChangeCallback={this.handleVoteChange}
				/>
				<div className="modify-comment-buttons">
					<EditButton onClick={this.handleEditCommentModalOpen} size={20} />
					<DeleteButton onClick={this.handleDeleteComment} size={20} />
				</div>
			</div>
		);
	}

	handleVoteChange = (update) => {
		if (update.option === "upVote") {
			this.props.upVoteCommentByCommentId(this.props.comment.id);
		} else if (update.option === "downVote") {
			this.props.downVoteCommentByCommentId(this.props.comment.id);
		}
		setTimeout(() => {
			this.props.updateCommentCountByPostId(this.props.comment.parentId);
		}, 1000);
	};

	handleDeleteComment = () => {
		this.props.deleteCommentByCommentId(this.props.comment.id);
		setTimeout(() => {
			this.props.updateCommentCountByPostId(this.props.comment.parentId);
		}, 1000);
	};

	handleEditCommentModalOpen = () => {
		this.props.toggleEditCommentModalIsOpen(this.props.comment);
		this.props.initializeEditComment(this.props.comment);
	};
}

function mapStateToProps({ main }) {
	return {
		loadedComment: main.loadedComment
	};
}

function mapDispatchToProps(dispatch) {
	return {
		upVoteCommentByCommentId: id => dispatch(upVoteCommentByCommentId(id)),
		downVoteCommentByCommentId: id => dispatch(downVoteCommentByCommentId(id)),
		initializeEditComment: comment => dispatch(initializeEditComment(comment)),
		toggleEditCommentModalIsOpen: comment =>
			dispatch(toggleEditCommentModalIsOpen(comment)),
		deleteCommentByCommentId: id => dispatch(deleteCommentByCommentId(id)),
		updateCommentCountByPostId: id => dispatch(updateCommentCountByPostId(id))
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
