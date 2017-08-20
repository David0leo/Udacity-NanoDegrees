import React from 'react'
//import Modal from 'react-modal'
import '../style/css/ReadableAppStyle.css'
import PostCard from './PostCard'

const ReadableCategoryView = ({posts}) => {
  return (
    <div className="readable-category-view">
      {posts.map((post) =>
      <PostCard 
        key={`post_${post.id}`}
        post={post}
      />  
      )}
    </div>
  )
}

export default ReadableCategoryView