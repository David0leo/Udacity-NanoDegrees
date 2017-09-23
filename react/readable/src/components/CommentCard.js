import React from 'react'
import '../style/css/ReadableAppStyle.css'
import { postUnixTimeToSimplifiedTimeElapsedString } from '../utils/helpers'
import ThumbVoter from './ThumbVoter'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class CommentCard extends React.Component{
  render() {
    const defaultComment = {
      id: '123456',
      parentId: '123456',
      timestamp: Date.now(),
      body: ' This is a test comment body. It could be longer so I might as well ramble for a bit in order to take up some space.',
      author: 'Ramona Flowers',
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
            <EditButton onClick={this.handleEditPost}></EditButton>
            <DeleteButton onClick={this.handleDeletePost}></DeleteButton>
          </div>
      </div>
    )
  }

  handleDeletePost() {

  }
  
  handleEditPost() {

  }
}

export default CommentCard