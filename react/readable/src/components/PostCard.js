import React from "react";
import { connect } from "react-redux";
import "../style/css/ReadableAppStyle.css";
import { postUnixTimeToSimplifiedTimeElapsedString } from "../utils/helpers";
import ThumbVoter from "./ThumbVoter";
import CommentsButton from "./CommentsButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

import {
  upVotePostById,
  downVotePostById,
  getCommentsByPostId,
  updateCommentCountByPostId,
  deletePostById,
} from "../actions/ApiActions";

class PostCard extends React.Component {
  componentDidMount() {
    this.props.updateCommentCountByPostId(this.props.post.id);
  }

  // if no post info is passed in, it will use the default post values
  // current values are just for testing purposes
  render() {
    const { post } = this.props;
    return (
      <div className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <h2 className="post-category">{`/${post.category}`}</h2>
        <p className="post-body-preview">{post.body}</p>
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
          <EditButton onClick={this.handleEditPost} />
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
    this.props.deletePostById(this.props.post.id)
  };

  handleEditPost = () => {};
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
