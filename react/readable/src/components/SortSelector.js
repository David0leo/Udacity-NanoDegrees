import React from 'react'
import { MdSort } from 'react-icons/lib/md'
import SortOrderButton from './SortOrderButton'
//TODO: stylesheet maybe

class SortSelector extends React.Component {
  state = {
    selectedValue: this.props.options[0] || null,
    sortOrderIsDescending: true
  }

  defaultProps = {
    options: [],
    size: 50,
    sortCallback: function(a, b){}
  }

  render() {
    const { options, size, sortCallback} = this.props

    return (
      <span className="sort-selector">
        <MdSort size={size}></MdSort>
        <select 
          onChange={(event) => {
            this.handleSelectOnChange(event.target.value)
          }}
        >
          {options.map((option) =>
          <option value={option}>{option}</option>
          )}
        </select>
        <SortOrderButton 
          size={size} 
          sortOrderToggleCallback={this.handleSortOrderToggle}
        ></SortOrderButton>
      </span>
    )
  }

  handleSelectOnChange = (value) => {
    console.log(value)
    this.setState(
      function(prevState, props){
        return {selectedValue: value}
      },
      this.props.sortCallback(value, this.state.sortOrderIsDescending)
    )
  }

  handleSortOrderToggle = (sortOrderIsDescending) => {
    this.setState(
      function(prevState, props){
        return {sortOrderIsDescending: !prevState.sortOrderIsDescending}
      }, 
      this.props.sortCallback(this.state.selectedValue, sortOrderIsDescending)
    )
  }
}

export default SortSelector