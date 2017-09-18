import React from 'react'
import PostCard from './PostCard'
import { connect } from 'react-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ReadablePostsByCategoryList extends React.Component {
  render() {
    const {posts, categoryNavPaneIsOpen} = this.props
    let filteredPosts = this.filterPosts(posts)
    return (
      <div 
        className="readable-posts-by-category-list"
        style={
          categoryNavPaneIsOpen
          ?{flex: "4"}
          :{flex: "4"}
        }>
        <ReactCSSTransitionGroup
          transitionName="post-transition"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {filteredPosts.map((post) => 
          <PostCard 
            post={post}
            key={`_post_card_${post.id}`}
          ></PostCard>
          )}
        </ReactCSSTransitionGroup>
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
      } else {
        return 0
      }
    })
    return filteredPosts
  }
}

function mapStateToProps({ main, API }) {
  return {
    posts: API.posts,
    categoryNavPaneIsOpen: main.categoryNavPaneIsOpen,
    sortBy: main.sortBy,
    sortOrderIsDescending: main.sortOrderIsDescending
  }
}


export default connect(mapStateToProps)(ReadablePostsByCategoryList)