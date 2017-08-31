import React from 'react'
import NavToggleButton from '../NavToggleButton'
import SortSelector from '../SortSelector'
import ReadableNewPostButton from '../ReadableNewPostButton'


const MainSecondaryHeader = (
  { 
    size=50,
    navPaneIsOpen=true, 
    newPostCallback=function(){}, 
    sortCallback=function(){}, 
    toggleNavPaneCallback=function(){}
  }
) => {
  return (
    <div className="MainSecondaryHeader">
      <NavToggleButton size={size} toggleNavCallback={toggleNavPaneCallback}></NavToggleButton>
      <SortSelector options={["this", "that"]} size={size} sortCallback={sortCallback}></SortSelector>
      <ReadableNewPostButton size={size} newPostCallback={newPostCallback}></ReadableNewPostButton>
    </div>
  )
}

export default MainSecondaryHeader