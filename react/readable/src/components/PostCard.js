import React from 'react'
import '../style/css/ReadableAppStyle.css'
import { postUnixTimeToSimplifiedTimeElapsedString } from '../utils/helpers'
import ThumbVoter from './ThumbVoter'

const PostCard = ({ post }) => {
  const defaultPost = {
    id: '123456',
    timestamp: Date.now(),
    title: 'Test Title',
    body: "This is a test of what a post body preview might look like. You would have a large amount of text, but you wouldn't be able to see all of it because it is only a preview. Ideally, it would look like the first portion of the text followed by elipses.",
    author: 'John Snow',
    category: 'Game of Thrones',
    voteScore: 0,
    deleted: false
  }
  // if no post info is passed in, it will use the default post values
  // current values are just for testing purposes
  post = {
    ...defaultPost,
    ...post
  }
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