import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md'

class SortOrderButton extends React.Component {
  state = {
    isDescending: true
  }

  defaultProps = {
    size: 30,
    sortOrderToggleCallback: function(b){}
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
  

  handleClick = () =>  {
    const oldIsDescending = this.state.isDescending
    this.setState(
      function(prevState, props) {
        return {isDescending: !prevState.isDescending}
      }, 
      this.props.sortOrderToggleCallback(!oldIsDescending)
    )
  }

}

export default SortOrderButton