import React from "react"
import { MdThumbUp, MdThumbDown } from "react-icons/lib/md"
import "../style/css/ReadableAppStyle.css"

const ThumbVoter = ({ voteScore=0, thumbSize=30 }) => {
  // const defaultVoteScore = 0
  // const defaultThumbSize = 30

  // voteScore = voteScore || defaultVoteScore
  // thumbSize = thumbSize || defaultThumbSize

  return (
    <div className="post-vote-buttons-container">
      <button className="post-button post-positive-button">
        <MdThumbUp size={thumbSize} />
      </button>
      <span className="post-vote-count">
        {voteScore}
      </span>
      <button className="post-button post-negative-button">
        <MdThumbDown size={thumbSize} />
      </button>
    </div>
  )
}

export default ThumbVoter