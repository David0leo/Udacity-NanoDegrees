import React from 'react'

const MainCategoryNavPane = ({ categories=[] }) => {
  return (
    <span className="main-category-nav-pane">
      <h3>Categories</h3>
      <ol className="nav-pane-categories-list">
        {categories.map((category) =>
        <li className="nav-pane-category-list-item">
        {category}
        </li>
        )}
      </ol>
    </span>
  )
}

export default MainCategoryNavPane