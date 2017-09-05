import React from 'react'
import NavToggleButton from '../NavToggleButton'
import SortSelector from '../SortSelector'
import ReadableNewPostButton from '../ReadableNewPostButton'


const MainSecondaryHeader = (
  { 
    size=50,
    navPaneIsOpen=false, 
    newPostCallback=function(){}, 
    sortCallback=function(){}, 
    toggleNavPaneCallback=function(){}
  }
) => {
  return (
    <div className="main-secondary-header">
      <div className="nav-toggle-button-container">
        <NavToggleButton 
          size={size} 
          toggleNavCallback={toggleNavPaneCallback}
        >
        </NavToggleButton>
      </div>
      <div className="nav-sort-selector-container">
        <SortSelector 
          options={["this", "that"]} 
          size={size} 
          sortCallback={sortCallback}
        >
        </SortSelector>
      </div>
      <div className="nav-readable-new-post-button-container">
        <ReadableNewPostButton 
          size={size} 
          newPostCallback={newPostCallback}
        >
        </ReadableNewPostButton>
      </div>
    </div>
  )
}

export default MainSecondaryHeader