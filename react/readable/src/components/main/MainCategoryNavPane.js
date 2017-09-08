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
        ?{width: "20%", opacity: "1"}
        :{width: "0", opacity: "0"}
        }
      >
        <h3>Categories</h3>
        <ol className="nav-pane-categories-list">
          {this.props.categories.map((category) => 
          <li 
            className={
              this.props.currentCategory === category 
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
    this.props.updateCurrentCategory({currentCategory: newCurrentCategory})
  }
}

// Get the main state so you know if the nav pane is open,
// and so you know what the current category is
function mapStateToProps ({ main }) {
  return {
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