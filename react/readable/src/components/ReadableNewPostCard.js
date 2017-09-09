import React from 'react'
import ThumbVoter from './ThumbVoter'
import { Field, reduxForm } from 'redux-form'

// basically following the redux-form Simple Form example
// http://redux-form.com/7.0.4/examples/simple/
const ReadableNewPostCard = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className="readable-new-post-card">
      <form onSubmit={handleSubmit} className="readable-new-post-form">
        <div className="readable-new-post-title">
          <Field 
            name="postTitle"
            component="input"
            type="text"
            placeholder="Post Title"
          />
        </div>
        <div className="readable-new-post-category">
          <Field 
            name="postCategory"
            component="input"
            type="text"
            placeholder="Post Category"
          />
        </div>
        <div className="readable-new-post-body">
          <Field 
            name="postBody"
            component="textarea"
            placeholder="Post Body"
          />
        </div>
        <div className="readable-new-post-name">
          <Field 
            name="postName"
            component="input"
            type="text"
            placeholder="Name"
          />
        </div>
        <ThumbVoter voteScore={0} voteChangeCallback={function(){}}>
        </ThumbVoter>
      </form>
      <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
    </div>
  )
}

export default reduxForm({
  form: 'readableNewPostCard'
})(ReadableNewPostCard)