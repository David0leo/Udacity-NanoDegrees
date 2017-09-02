import React from 'react'
import PostCard from './PostCard'

const ReadablePostsByCategoryList = ({ posts=[] }) => {
  return (
    <span className="readable-posts-by-category-list">
      {posts.map((post) => 
      <PostCard post={post}></PostCard>
      )}
    </span>
  )
}

export default ReadablePostsByCategoryList