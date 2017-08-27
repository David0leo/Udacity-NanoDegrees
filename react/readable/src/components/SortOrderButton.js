import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md'

class SortOrderButton extends React.Component {
  state = {
    isDescending: true
  }

  defaultProps = {
    size: 30,
    sortCallback: function(){}
  }

  render() {
    const arrowSize = this.props.size

    return (
      <button onClick={this.handleClick}>
        {
          this.state.isDescending
          ? <MdArrowDropDown size={arrowSize}></MdArrowDropDown>
          : <MdArrowDropUp size={arrowSize}></MdArrowDropUp>
        }
      </button>
    )
  }

  handleClick = () => {
    this.setState(
      (prevState) => {
        isDescending: !prevState.isDescending
      }, 
      this.props.sortCallback
    )
  }
}

export default SortOrderButton