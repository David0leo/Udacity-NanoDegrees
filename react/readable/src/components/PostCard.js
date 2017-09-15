import React from 'react'
import '../style/css/ReadableAppStyle.css'
import { postUnixTimeToSimplifiedTimeElapsedString } from '../utils/helpers'
import ThumbVoter from './ThumbVoter'

const PostCard = ({ post }) => {
  // if no post info is passed in, it will use the default post values
  // current values are just for testing purposes
  return (
    <div className="post-card">
      <h1 className="post-title">
        {post.title}
      </h1>
      <h2 className="post-category">
        {`/${post.category}`}
      </h2>
      <p className="post-body-preview">
        {post.body}
      </p>
      <p className="post-time">
        Posted {postUnixTimeToSimplifiedTimeElapsedString(Date.now(), post.timestamp)} by {post.author}
      </p>
      <ThumbVoter 
        voteScore={post.voteScore}
        voteChangeCallback={function(newVoteScore){console.log("voteIncremented in PostCard")}}
      >
      </ThumbVoter>
    </div>
  )
}

export default PostCard