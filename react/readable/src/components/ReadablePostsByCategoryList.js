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
      {Object.keys(posts).map((key) => 
      <PostCard 
        post={posts.key}
        key={`_post_${posts[key].id}`}
      ></PostCard>
      )}
    </div>
  )
}

export default ReadablePostsByCategoryList