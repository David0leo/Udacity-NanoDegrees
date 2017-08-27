import React from 'react'
import { MdSort } from 'react-icons/lib/md'
import SortOrderButton from './SortOrderButton'
//TODO: stylesheet maybe

const SortSelector = ({ options=[], size=50, sortCallback=function(){} }) => {
  return (
    <div className="sort-selector">
      <MdSort size={size}></MdSort>
      <select onChange={sortCallback}>
        {options.map((option) =>
        <option value={option}>{option}</option>
        )}
      </select>
      <SortOrderButton size={size} sortCallback={sortCallback}></SortOrderButton>
    </div>
  )
}

export default SortSelector