import React from 'react'

export default MainSecondaryHeader = ({ navPaneIsOpen, addPostCallback, sortCallback, toggleNavPaneCallback}) => {
  return (
    <div>
      <button></button>
      <SortSelector></SortSelector>
      <NewPostButton></NewPostButton>
    </div>
  )
}