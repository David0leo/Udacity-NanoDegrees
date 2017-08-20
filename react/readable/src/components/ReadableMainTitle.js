import React from 'react'
import '../style/css/ReadableAppStyle.css'

const ReadableMainTitle = ({ category='all' }) => {
  return (
    <div className="readable-main-title">
      <h1 className="app-title">Readable</h1>
      <h2 className="post-category">/{category}</h2>
    </div>
  )
}

export default ReadableMainTitle