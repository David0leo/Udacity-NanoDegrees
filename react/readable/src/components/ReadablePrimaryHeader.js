import React from 'react'
import '../style/css/ReadableAppStyle.css'

export default ReadablePrimaryHeader = ({ category='all' }) => {
  return (
    <div className="readable-main-title">
      <h1 className="app-title">Readable</h1>
      <h2 className="app-category">/{category}</h2>
    </div>
  )
}