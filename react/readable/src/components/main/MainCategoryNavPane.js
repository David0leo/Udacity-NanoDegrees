import React from 'react'

const MainCategoryNavPane = ({ categories=[] }) => {
  return (
    <div className="main-category-nav-pane">
      <h3>Categories</h3>
      <ol className="nav-pane-categories-list">
        {categories.map((category) =>
        <li className="nav-pane-category-list-item">
        {category}
        </li>
        )}
      </ol>
    </div>
  )
}

export default MainCategoryNavPane