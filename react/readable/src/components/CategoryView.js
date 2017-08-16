import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import PostCard from './post-card/PostCard'

const CategoryView = ({posts}) => {
  return (
    <div>
      {posts.map((post) =>
      <PostCard 
        key={post.id}
        post={post}
      />  
      )}
    </div>
  )
}

export default CateoryView