import React from 'react'
import NavToggleButton from '../NavToggleButton'
import SortSelector from '../SortSelector'


const MainSecondaryHeader = (
  { 
    size=50,
    navPaneIsOpen=true, 
    addPostCallback=function(){}, 
    sortCallback=function(){}, 
    toggleNavPaneCallback=function(){}
  }
) => {
  return (
    <div>
      <NavToggleButton size={size}></NavToggleButton>
      <SortSelector options={[]} size={size} sortCallback={sortCallback}></SortSelector>
      <ReadableNewPostButton size={size}></ReadableNewPostButton>
    </div>
  )
}

export default MainSecondaryHeader