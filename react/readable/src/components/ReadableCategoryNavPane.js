import React from 'react'
import '../style/css/ReadableAppStyle.css'

const ReadableCategoryNavPane = ({ categories }) => {
  return (
    <div className="readable-category-nav-pane">
      <button className="nav-pane-button"></button>
      <h3 className="nav-pane-header">Categories</h3>
      <ol className="nav-pane-ordered-list">
        {categories.map((category) => 
        <li className="nav-pane-option">
        {category}
        </li>
        )}
      </ol>
    </div>
  )
}

export default ReadableCategoryNavPane