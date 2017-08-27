import React from 'react'
import '../style/css/ReadableAppStyle.css'
import ReadableIcon from './ReadableIcon'

export default ReadablePrimaryHeader = ({ category='all' }) => {
  return (
    <div className="readable-main-title">
      <ReadableIcon size={100} primaryColor={"white"} secondaryColor={"currentColor"}></ReadableIcon>
      <h1 className="app-title">Readable</h1>
      <h2 className="app-category">/{category}</h2>
    </div>
  )
}