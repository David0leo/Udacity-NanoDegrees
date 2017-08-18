import React from 'react'
//import Modal from 'react-modal'
import PostCard from './PostCard'

const CategoryView = ({posts}) => {
  return (
    <div>
      {posts.map((post) =>
      <PostCard 
        key={`post_${post.id}`}
        post={post}
      />  
      )}
    </div>
  )
}

export default CategoryView