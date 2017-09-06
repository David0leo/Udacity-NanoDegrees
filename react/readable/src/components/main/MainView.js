import React from 'react'
import '../../style/css/ReadableAppStyle.css'
import ReadableMainTitle from '../ReadableMainTitle'
import ReadableCategoryNavPane from '../ReadableCategoryNavPane'
import ReadableCategoryView from '../ReadableCategoryView'

import ReadablePrimaryHeader from '../ReadablePrimaryHeader'
import MainSecondaryHeader from './MainSecondaryHeader'
import MainCategoryNavPane from './MainCategoryNavPane'
import ReadablePostsByCategoryList from '../ReadablePostsByCategoryList'

import { connect } from 'react-redux'
import { 
  toggleCategoryNav, 
  updateSortBy, 
  updateSortOrder, 
  updateCurrentCategory, 
  addPost 
} from '../../actions'


// const MainView = ({  }) => {
//   return (
//     <div className="readable-main-view">
//       <ReadableMainTitle></ReadableMainTitle>
//       <div className="body-container">
//         <div className="nav-container">
//           <ReadableCategoryNavPane categories={['test', 'testing', 'testy']}></ReadableCategoryNavPane>
//         </div>
//         <div className="category-view-container">
//           <ReadableCategoryView posts={[{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}]}></ReadableCategoryView>
//         </div>
//       </div>
//       <div className="readable-main-footer"></div>
//     </div>
//   )
// }

class MainView extends React.Component {
  render() {
    const {main, toggleCategoryNav, updateSortBy, updateSortOrder, updateCurrentCategory, addPost} = this.props

    return (
      <div className="main-view">
        <ReadablePrimaryHeader 
          currentCategory={main.currentCategory}
        ></ReadablePrimaryHeader>
        <MainSecondaryHeader 
          size={40}
          newPostCallback={this.addNewPost}
          sortCallback={this.sortPosts}
          toggleNavPaneCallback={this.handleNavPaneToggle}
        ></MainSecondaryHeader>
        <div className="main-body-container">
          <MainCategoryNavPane 
            navPaneIsOpen={main.categoryNavIsOpen}
            updateCurrentCategoryCallback={this.updateCurrentCategory}
          ></MainCategoryNavPane>
          <ReadablePostsByCategoryList 
            posts={[{id:0}, {id:1}]}
            navPaneIsOpen={main.categoryNavIsOpen}
          ></ReadablePostsByCategoryList>
        </div>
      </div>
    )
  }

  // for these functions, change to arrow notation if want access to this.

  addNewPost() {
    console.log("Adding new post")
  }

  sortPosts(sortKey, sortOrderIsDescending) {
    console.log(`Sorting with key ${sortKey} and it is ${sortOrderIsDescending} that it is descending`)
  }

  handleNavPaneToggle = () => {
    this.props.toggleCategoryNav()
  }
}

function mapStateToProps ({ main }) {
  return {
    main
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleCategoryNav: (data) => dispatch(toggleCategoryNav(data)),
    updateSortBy: (data) => dispatch(updateSortBy(data)),
    updateSortOrder: (data) => dispatch(updateSortOrder(data)),
    updateCurrentCategory: (data) => dispatch(updateCurrentCategory(data)),
    addPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)