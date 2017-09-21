import React from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/lib/md";
import "../style/css/ReadableAppStyle.css";

class ThumbVoter extends React.Component {
  state = {
    voteScore: this.props.voteScore || 0,
    positivePressed: false,
    negativePressed: false,
    disabled: this.props.disabled || false
  };

  render() {
    const { thumbSize } = this.props;
    const {
      voteScore,
      positivePressed,
      negativePressed,
      disabled
    } = this.state;

    return (
      <div className="post-vote-buttons-container">
        <button
          className="post-button post-positive-button"
          onClick={this.incrementVoteScore}
        >
          <MdThumbUp
            size={thumbSize}
            color={!disabled && positivePressed ? "#2196f3" : ""}
          />
        </button>

        <span className="post-vote-count">{voteScore}</span>
        <button
          className="post-button post-negative-button"
          onClick={this.decrementVoteScore}
        >
          <MdThumbDown
            size={thumbSize}
            color={!disabled && negativePressed ? "#f44336" : ""}
          />
        </button>
      </div>
    );
  }

  incrementVoteScore = () => {
    if (!this.props.disabled) {
      let newState = {};
      let oldVoteScore = this.state.voteScore;
      let newVoteScore = this.state.voteScore;

      if (!this.state.positivePressed) {
        newVoteScore += 1;
        if (this.state.negativePressed) {
          newVoteScore += 1; // increment by 2 in total to account for removing negative vote
        }
        newState = {
          positivePressed: true,
          negativePressed: false,
          voteScore: newVoteScore
        };
      } else {
        // if positive pressed already, press again to remove vote

        newVoteScore -= 1;
        newState = {
          positivePressed: false,
          negativePressed: false,
          voteScore: newVoteScore
        };
      }

      this.setState(function(prevState, props) {
        return newState;
      }, this.updateVoteScore(oldVoteScore, newVoteScore));
    }
  };

  decrementVoteScore = () => {
    if (!this.props.disabled) {
      let newState = {};
      let oldVoteScore = this.state.voteScore;
      let newVoteScore = this.state.voteScore;

      if (!this.state.negativePressed) {
        newVoteScore -= 1;
        if (this.state.positivePressed) {
          newVoteScore -= 1; // decrement by 2 in total to account for removing positive vote
        }
        newState = {
          positivePressed: false,
          negativePressed: true,
          voteScore: newVoteScore
        };
      } else {
        // if negative pressed already, press again to remove vote
        newVoteScore += 1; // increment to remove previous decrement
        newState = {
          positivePressed: false,
          negativePressed: false,
          voteScore: newVoteScore
        };
      }

      this.setState(function(prevState, props) {
        return newState;
      }, this.updateVoteScore(oldVoteScore, newVoteScore));
    }
  };

  updateVoteScore = (oldVoteScore, newVoteScore) => {
    // TODO: fix logic, use a switch
    let update = {};
    const voteDifference = newVoteScore - oldVoteScore;
    if (voteDifference > 0) {
      update.option = "upVote";
    } else if (voteDifference < 0) {
      update.option = "downVote";
    } 
    if (voteDifference === 2) {
      this.props.voteChangeCallback(update);
    } else if (voteDifference === -2) {
      this.props.voteChangeCallback(update);
    }
    this.props.voteChangeCallback(update);
  };
  //   updateVoteScore = newVoteScore => {
  //     this.setState(function(prevState, props) {
  //       return { voteScore: newVoteScore };
  //     }, this.props.voteChangeCallback(newVoteScore));
  //   };
  // }
}

ThumbVoter.defaultProps = {
  voteScore: 0,
  thumbSize: 30,
  voteChangeCallback: function(oldVoteScore, newVoteScore) {}
};

export default ThumbVoter;
