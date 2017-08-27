import React from 'react'
import { MdSort } from 'react-icons/lib/md'
import SortOrderButton from './SortOrderButton'
//TODO: stylesheet

const SortSelector = ({ options=[], size }) => {
  return (
    <div>
      <MdSort size={size}></MdSort>
      <select>
        {options.map((option) =>
        <option value={option}>{option}</option>
        )}
      </select>
      <SortOrderButton></SortOrderButton>
    </div>
  )
}

export default SortSelector