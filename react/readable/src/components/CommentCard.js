import React from 'react'
import '../style/css/ReadableAppStyle.css'
import { postUnixTimeToSimplifiedTimeElapsedString } from '../utils/helpers'
import ThumbVoter from './ThumbVoter'

const CommentCard = ({ comment }) => {
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

  comment = {
    ...defaultComment,
    ...comment
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
    </div>
  )
}

export default CommentCard