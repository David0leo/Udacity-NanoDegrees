import React from 'react'
import PostCard from './PostCard'

const ReadablePostsByCategoryList = ({ posts=[], navPaneIsOpen=true }) => {
  return (
    <div 
      className="readable-posts-by-category-list"
      style={
        navPaneIsOpen
        ?{flex: "4"}
        :{flex: "4"}
      }>
      {posts.map((post) => 
      <PostCard 
        post={post}
        key={`_post_${post.id}`}
      ></PostCard>
      )}
    </div>
  )
}

export default ReadablePostsByCategoryList