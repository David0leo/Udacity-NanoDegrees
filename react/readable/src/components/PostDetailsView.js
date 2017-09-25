import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import PostCard from "./PostCard";
import CommentCard from "./CommentCard";
import ReadablePrimaryHeader from "./ReadablePrimaryHeader";
import ReadableEditPostCard from "./ReadableEditPostCard";

import {
  getPostById,
  getCommentsByPostId,
  updateCommentCountByPostId,
  editPost,
} from "../actions/ApiActions";

import {
  toggleEditPostModalIsOpen
} from '../actions'

class PostDetailsView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log(id)
    // this.props.getPostById(id)
    // this.props.getCommentsByPostId(id)
    this.props.updateCommentCountByPostId(id);
  }

  render() {
    const { main, post, comments } = this.props;
    // console.log(comments)
    // console.log(post)

    return (
      <div>
        <ReadablePrimaryHeader
          currentCategory={this.props.match.params.category}
        />
        {!post.deleted ? (
          <div>
            <PostCard post={post} />
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
    this.handleEditPostModalClose(editedPost);
  };

  handleEditPostModalClose = (post) => {
    this.props.toggleEditPostModalIsOpen(post)
  }
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
    comments: comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostById: id => dispatch(getPostById(id)),
    getCommentsByPostId: id => dispatch(getCommentsByPostId(id)),
    updateCommentCountByPostId: id => dispatch(updateCommentCountByPostId(id)),
    editPost: data => dispatch(editPost(data)),
    toggleEditPostModalIsOpen: (data) => dispatch(toggleEditPostModalIsOpen(data)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetailsView)
);
