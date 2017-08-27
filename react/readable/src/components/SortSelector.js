import React from 'react'
import { MdSort } from 'react-icons/lib/md'
import SortOrderButton from './SortOrderButton'
//TODO: stylesheet

const SortSelector = ({ options=[], size=50, sortCallback=function(){} }) => {
  return (
    <div>
      <MdSort size={size}></MdSort>
      <select>
        {options.map((option) =>
        <option value={option}>{option}</option>
        )}
      </select>
      <SortOrderButton size={size} sortCallback={sortCallback}></SortOrderButton>
    </div>
  )
}

export default SortSelector