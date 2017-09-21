import React from 'react'
import {connect} from 'react-redux'
import '../style/css/ReadableAppStyle.css'
import { postUnixTimeToSimplifiedTimeElapsedString } from '../utils/helpers'
import ThumbVoter from './ThumbVoter'

import { upVotePostById, downVotePostById } from '../actions/ApiActions'

class PostCard extends React.Component {
  // if no post info is passed in, it will use the default post values
  // current values are just for testing purposes
  render() {
    const { post } = this.props
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
          voteChangeCallback={this.handleVoteChange}
        >
        </ThumbVoter>
      </div>
    )
  }

  handleVoteChange = (update) => {
    if (update.option === "upVote") {
      this.props.upVotePostById(this.props.post.id)
    } else if (update.option === "downVote") {
      this.props.downVotePostById(this.props.post.id)
    }
  }
}

function mapStateToProps ({}) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    upVotePostById: (id) => dispatch(upVotePostById(id)),
    downVotePostById: (id) => dispatch(downVotePostById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard)