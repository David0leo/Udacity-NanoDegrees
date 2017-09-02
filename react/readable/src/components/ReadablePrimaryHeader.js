import React from 'react'
import ReadableIcon from './ReadableIcon'

const ReadablePrimaryHeader = ({ category='all' }) => {
  return (
    <div className="readable-primary-header">
    {/* TODO: Wrap up in a link and route to the main page if clicked icon or
              if clicked the Readable Title
     */}
      <ReadableIcon 
        size={100} 
        primaryColor={"white"} 
        secondaryColor={"currentColor"}>
      </ReadableIcon>
      <h1 className="app-title">Readable</h1>
      {/* TODO: Wrap category in link, to refresh that category view */}
      <h2 className="app-category">/{category}</h2>
    </div>
  )
}

export default ReadablePrimaryHeader