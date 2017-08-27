import React from 'react'
import { MdAddCircle } from 'react-icons/lib/md'

const ReadableNewPostButton = ({size=30}) => {
  return (
    <button className="readable-new-post-button">
      <PostIcon size={size} primaryColor="currentColor" secondaryColor="#607d8b"></PostIcon>
      <MdAddCircle size={size}></MdAddCircle>
    </button>
  )
}

export default ReadableNewPostButton