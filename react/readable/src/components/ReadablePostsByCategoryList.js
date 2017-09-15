import React from 'react'
import PostCard from './PostCard'
import { connect } from 'react-redux'

class ReadablePostsByCategoryList extends React.Component {
  
  render() {
    const {posts, categoryNavPaneIsOpen} = this.props
    let filteredPosts = this.filterPosts(posts)
    console.log(filteredPosts)
    return (
      <div 
        className="readable-posts-by-category-list"
        style={
          categoryNavPaneIsOpen
          ?{flex: "4"}
          :{flex: "4"}
        }>
        {filteredPosts.map((post) => 
        <PostCard 
          post={post}
          
        ></PostCard>
        )}
      </div>
    )
  }

  filterPosts = (posts) => {
    const {sortBy, sortOrderIsDescending} = this.props

    let filteredPosts = []
    for (var postId in posts) {
      filteredPosts.push(posts[postId])
    }

    filteredPosts.sort(function(a, b) {
      if (sortBy === 'Vote Score') {
        if (sortOrderIsDescending) {
          return a.voteScore - b.voteScore
        } else {
          return b.voteScore - a.voteScore
        }
      } else if (sortBy === 'Time Posted') {
        if (sortOrderIsDescending) {
          return a.timestamp - b.timestamp
        } else {
          return b.timestamp - a.timestamp
        }
      }
    })
    return filteredPosts
  }
}

function mapStateToProps({ main }) {
  return {
    posts: main.posts,
    categoryNavPaneIsOpen: main.categoryNavPaneIsOpen,
    sortBy: main.sortBy,
    sortOrderIsDescending: main.sortOrderIsDescending
  }
}


export default connect(mapStateToProps)(ReadablePostsByCategoryList)