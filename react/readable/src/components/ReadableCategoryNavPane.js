import React from 'react'
import '../style/css/ReadableAppStyle.css'
import { MdMenu } from 'react-icons/lib/md'

const ReadableCategoryNavPane = ({ categories }) => {
  return (
    <div className="readable-category-nav-pane">
      <button className="nav-pane-button">
        <MdMenu size={30}></MdMenu>
      </button>
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