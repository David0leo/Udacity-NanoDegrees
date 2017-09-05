import React from "react"
import { MdThumbUp, MdThumbDown } from "react-icons/lib/md"
import "../style/css/ReadableAppStyle.css"

class ThumbVoter extends React.Component {
  state = {
    voteScore: this.props.voteScore || 0,
    positivePressed: false,
    negativePressed: false
  }

  render() {
    const {voteScore, thumbSize, voteChangeCallback} = this.props

    return (
      <div className="post-vote-buttons-container">
        <button 
          className="post-button post-positive-button"
          onClick={this.incrementVoteScore}
        >
          <MdThumbUp size={thumbSize} color={this.state.positivePressed ? "#2196f3" : ""}/>
        </button>
        <span className="post-vote-count">
          {this.state.voteScore}
        </span>
        <button 
          className="post-button post-negative-button"
          onClick={this.decrementVoteScore}
        >
          <MdThumbDown size={thumbSize} color={this.state.negativePressed ? "#f44336" : ""}/>
        </button>
      </div>
    )
  }

  incrementVoteScore = () => {
    let newState = {}
    let newVoteScore = this.state.voteScore
    
    if (!this.state.positivePressed) {
      newState = {positivePressed: true, negativePressed: false}
      newVoteScore += 1
      if (this.state.negativePressed) {
        newVoteScore += 1 // increment by 2 in total to account for removing negative vote
      }
    } else {
      // if positive pressed already, press again to remove vote
      newState = {positivePressed: false, negativePressed: false}
      newVoteScore -= 1
    }

    this.setState(
      function(prevState, props) {
        return newState
      },
      this.updateVoteScore(newVoteScore)
    )
  }

  decrementVoteScore = () => {
    let newState = {}
    let newVoteScore = this.state.voteScore
    
    if (!this.state.negativePressed) {
      newState = {positivePressed: false, negativePressed: true}
      newVoteScore -= 1
      if (this.state.positivePressed) {
        newVoteScore -= 1 // decrement by 2 in total to account for removing positive vote
      }
      
    } else {
      // if negative pressed already, press again to remove vote
      newState = {positivePressed: false, negativePressed: false}
      newVoteScore += 1 // increment to remove previous decrement
    }

    this.setState(
      function(prevState, props) {
        return newState
      },
      this.updateVoteScore(newVoteScore)
    )
  }

  updateVoteScore = (newVoteScore) => {
    this.setState(
      function(prevState, props) {
        return {voteScore: newVoteScore}
      },
      this.props.voteChangeCallback(newVoteScore)
    )
  }
}

ThumbVoter.defaultProps = {
  voteScore: 0,
  thumbSize: 30,
  voteChangeCallback: function(newVoteScore){}
}

export default ThumbVoter