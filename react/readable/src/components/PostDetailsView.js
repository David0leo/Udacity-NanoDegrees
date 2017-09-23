import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import PostCard from './PostCard'
import CommentCard from './CommentCard'
import ReadablePrimaryHeader from './ReadablePrimaryHeader'

import { getPostById, getCommentsByPostId, updateCommentCountByPostId } from '../actions/ApiActions'

class PostDetailsView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    // console.log(id)
    // this.props.getPostById(id)
    // this.props.getCommentsByPostId(id)
    this.props.updateCommentCountByPostId(id)
  }

  render(){
    const { post, comments } = this.props
    // console.log(comments)
    // console.log(post)
    
    return (
      <div>
        <ReadablePrimaryHeader currentCategory={this.props.match.params.category}/>
        {!post.deleted 
        ? <div>
            <PostCard post={post}></PostCard>
            <div className='comments-container'>
              {comments.map((comment) => 
              <CommentCard
                key={`comment_${comment.id}`}
                comment={comment}
              >
              </CommentCard>
            )}
            </div>
          </div>
        :
        <div><br/>>> Oops, the post you are looking for has been deleted! :(</div>
        }
      </div>
    )
  }
}

function mapStateToProps({API}, props) {
  let post = {}
  let comments = []
  const id = props.match.params.id

  if (API.posts !== undefined) {  
    API.posts.forEach(apiPost => {
      if (apiPost !== undefined && apiPost.id === id) {
        post = apiPost
      }
    })
  }

  if (API.comments !== undefined) {
    comments = API.comments[id]
    if (comments === undefined) {
      comments = []
    }
  }

  return {
    post: post,
    comments: comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostById: (id) => dispatch(getPostById(id)),
    getCommentsByPostId: (id) => dispatch(getCommentsByPostId(id)),
    updateCommentCountByPostId: (id) => dispatch(updateCommentCountByPostId(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetailsView))