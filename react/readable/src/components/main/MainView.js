import React from 'react'
import '../../style/css/ReadableAppStyle.css'
import ReadableMainTitle from '../ReadableMainTitle'
import ReadableCategoryNavPane from '../ReadableCategoryNavPane'
import ReadableCategoryView from '../ReadableCategoryView'

import ReadablePrimaryHeader from '../ReadablePrimaryHeader'
import MainSecondaryHeader from './MainSecondaryHeader'
import MainCategoryNavPane from './MainCategoryNavPane'
import ReadablePostsByCategoryList from '../ReadablePostsByCategoryList'

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
  state = {
    
  }

  render() {
    return (
      <div className="main-view">
        <ReadablePrimaryHeader></ReadablePrimaryHeader>
        <MainSecondaryHeader 
          size={50}
          newPostCallback={this.addNewPost}
          sortCallback={this.sortPosts}
          toggleNavPaneCallback={this.handleNavPaneToggle}
        ></MainSecondaryHeader>
        <div className="main-body-container">
          <MainCategoryNavPane></MainCategoryNavPane>
          <ReadablePostsByCategoryList posts={[{id:0}, {id:1}]}></ReadablePostsByCategoryList>
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

  handleNavPaneToggle() {
    console.log("Nav pane toggled")
  }



}

export default MainView