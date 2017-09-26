import React from 'react'
import { connect } from 'react-redux'

import '../style/css/ReadableAppStyle.css'
import { postUnixTimeToSimplifiedTimeElapsedString } from '../utils/helpers'
import ThumbVoter from './ThumbVoter'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

import { 
  deleteCommentByCommentId, 
  editComment, 
  upVoteCommentByCommentId, 
  downVoteCommentByCommentId,
  updateCommentCountByPostId
} from '../actions/ApiActions'
import { 
  toggleEditCommentModalIsOpen, 
  initializeEditComment 
} from '../actions'


class CommentCard extends React.Component{
  render() {
    const defaultComment = {
      id: '',
      parentId: '',
      timestamp: '',
      body: '',
      author: '',
      voteScore: 0,
      deleted: false,
      parentDeleted: false
    }
  
    const comment = {
      ...defaultComment,
      ...this.props.comment
    }
    return (
      <div className="comment-card">
        <h1 className="comment-author">
          {comment.author}
        </h1>
        <p className="comment-time">
          {postUnixTimeToSimplifiedTimeElapsedString(Date.now(), comment.timestamp)}
        </p>
        <p className="comment-body">
          {comment.body}
        </p>
        <ThumbVoter
          voteScore={comment.voteScore}
          thumbSize={20}
        >
        </ThumbVoter>
        <div className="modify-comment-buttons">
            <EditButton onClick={this.handleEditComment}></EditButton>
            <DeleteButton onClick={this.handleDeleteComment}></DeleteButton>
          </div>
      </div>
    )
  }

  handleVoteChange = update => {
    if (update.option === 'upVote') {
      this.props.upVoteCommentByCommentId(this.props.comment.id)
    } else if (update.option === 'downVote') {
      this.props.downVoteCommentByCommentId(this.props.comment.id)
    }
  }

  handleDeleteComment = () => {
    this.props.deleteCommentByCommentId(this.props.comment.id)
    setTimeout(() => {this.props.updateCommentCountByPostId(this.props.comment.parentId)}, 1000)
  }
  
  handleEditComment = () => {
    this.props.toggleEditCommentModalIsOpen(this.props.comment)
    this.props.initializeEditComment(this.props.comment)
  }
}

function mapStateToProps({main}) {
  return {
    loadedComment: main.loadedComment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVoteCommentByCommentId: id => dispatch(upVoteCommentByCommentId(id)),
    downVoteCommentByCommentId: id => dispatch(downVoteCommentByCommentId(id)),
    initializeEditComment: comment => dispatch(initializeEditComment(comment)),
    toggleEditCommentModalIsOpen: comment => dispatch(toggleEditCommentModalIsOpen(comment)),
    deleteCommentByCommentId: id => dispatch(deleteCommentByCommentId(id)),
    updateCommentCountByPostId: id => dispatch(updateCommentCountByPostId(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentCard)