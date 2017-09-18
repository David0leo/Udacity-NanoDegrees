import React from 'react'
import { connect } from 'react-redux'
import { updateCurrentCategory } from '../../actions'

class MainCategoryNavPane extends React.Component {
  render() {
    return (
      <div 
        className="main-category-nav-pane"
        style={
        this.props.navPaneIsOpen
        ?{flex: "1", opacity: "1"}
        :{flex: "0", transform: "translateX(-120%)", opacity: "0"}
        }
      >
        <h3>Categories</h3>
        <ol className="nav-pane-categories-list">
          <li
            className={
              this.props.currentCategory === 'all'
              ? 'nav-pane-category-list-item-hover'
              : 'nav-pane-category-list-item'
            }
            key={`_category_all`}
            onClick={this.updateCurrentCategory.bind(this, 'all')}
          >
          all
          </li>
          {this.props.apiCategories.map((category) => 
          <li 
            className={
              this.props.currentCategory === category.name 
              ? 'nav-pane-category-list-item-hover'
              : 'nav-pane-category-list-item'
            }
            key={`_category_${category.path}`}
            onClick={this.updateCurrentCategory.bind(this, category.name)}
          >
          {category.name}
          </li>
          )}
        </ol>
      </div>
    )
  }

  updateCurrentCategory = (newCurrentCategory, event) => {
    this.props.updateCurrentCategory({currentCategory: newCurrentCategory})
  }
}

// Get the main state so you know if the nav pane is open,
// and so you know what the current category is
function mapStateToProps ({ main, apiReducer }) {
  return {
    apiCategories: apiReducer.categories,
    currentCategory: main.currentCategory,
    categoryNavIsOpen: main.categoryNavIsOpen,
    categories: main.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateCurrentCategory: (data) => dispatch(updateCurrentCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryNavPane)