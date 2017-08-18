import React from 'react'
import PostCard from './PostCard'
import CommentCard from './CommentCard'

const PostDetailsView = ({post, comments}) => {
  return (
    <div>
      <PostCard></PostCard>
      <div className='comments-container'>
        {comments.map((comment) => 
        <CommentCard
          key={`comment_${comment.id}`}
          comment={comment}
        >
        </CommentCard>
        )}
      </div>
    </div>
  )
}

export default PostDetailsView