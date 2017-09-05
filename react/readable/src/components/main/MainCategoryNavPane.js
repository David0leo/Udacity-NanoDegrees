import React from 'react'

class MainCategoryNavPane extends React.Component {
  state = {
    currentCategory: this.props.currentCategory || 'all',
    navPaneIsOpen: this.props.navPaneIsOpen
  }

  render() {
    return (
      <div 
        className="main-category-nav-pane"
        style={
        this.props.navPaneIsOpen
        ?{width: "20%", opacity: "1"}
        :{width: "0", opacity: "0"}
        }
      >
        <h3>Categories</h3>
        <ol className="nav-pane-categories-list">
          {this.props.categories.map((category) => 
          <li 
            className={
              this.state.currentCategory === category 
              ? 'nav-pane-category-list-item-hover'
              : 'nav-pane-category-list-item'
            }
            key={`_category_${category}`}
            onClick={this.updateCurrentCategory.bind(this, category)}
          >
          {category}
          </li>
          )}
        </ol>
      </div>
    )
  }

  updateCurrentCategory = (newCurrentCategory, event) => {
    this.setState(function(prevState, props) {
      return {currentCategory: newCurrentCategory}
    }, 
      this.props.updateCurrentCategoryCallback(newCurrentCategory)
    )
  }
}

MainCategoryNavPane.defaultProps = {
  categories: ['all', 'test'],
  currentCategory: 'all',
  updateCurrentCategoryCallback: function(newCurrentCategory){}
}

export default MainCategoryNavPane