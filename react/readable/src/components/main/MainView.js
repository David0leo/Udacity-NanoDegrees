import React from "react";
import "../../style/css/ReadableAppStyle.css";
// import ReadableMainTitle from '../ReadableMainTitle'
// import ReadableCategoryNavPane from '../ReadableCategoryNavPane'
// import ReadableCategoryView from '../ReadableCategoryView'

import ReadablePrimaryHeader from "../ReadablePrimaryHeader";
import MainSecondaryHeader from "./MainSecondaryHeader";
import MainCategoryNavPane from "./MainCategoryNavPane";
import ReadablePostsByCategoryList from "../ReadablePostsByCategoryList";

import ReadableNewPostCard from "../ReadableNewPostCard";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
  toggleCategoryNav,
  toggleSortOrderIsDescending,
  updateCurrentCategory,
  toggleNewPostModalIsOpen,
  incrementNextPostId
} from "../../actions";

import { getAllCategories, getAllPosts, addNewPost as addPost} from '../../actions/ApiActions'

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
    const { main } = this.props;
    let currentCategory = this.props.match.params.category;
    if (currentCategory === undefined) {
      currentCategory = 'all'
    }
    return (
      <div className="main-view">
        <ReadablePrimaryHeader currentCategory={currentCategory} />
        <MainSecondaryHeader
          size={40}
          newPostCallback={this.handleNewPostModalOpen}
          sortCallback={this.sortPosts}
          toggleNavPaneCallback={this.handleNavPaneToggle}
        />

        <div className="main-body-container">
          <MainCategoryNavPane
            currentCategory={currentCategory}
            navPaneIsOpen={main.categoryNavIsOpen}
          />
          <ReadablePostsByCategoryList />
        </div>
        <div className="main-footer" />
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <ReadableNewPostCard
            categories={main.categories}
            handleSubmit={this.addNewPost}
          />
        </MuiThemeProvider>
      </div>
    );
  }

  // for these functions, change to arrow notation if want access to this.

  addNewPost = () => {
    let newPost = this.props.form.readableNewPostCard.values;
    newPost.id = this.props.main.nextPostId;
    newPost.timestamp = Date.now();
    this.props.addPost(newPost);
    this.props.incrementNextPostId();

    this.handleNewPostModalClose();
  };

  sortPosts(sortKey, sortOrderIsDescending) {
    console.log(
      `Sorting with key ${sortKey} and it is ${sortOrderIsDescending} that it is descending`
    );
  }

  handleNavPaneToggle = () => {
    this.props.toggleCategoryNav();
  };

  handleNewPostModalOpen = () => {
    //Open and close is the same because just toggling
    this.props.toggleNewPostModalIsOpen();
  };

  handleNewPostModalClose = () => {
    this.props.toggleNewPostModalIsOpen();
  };
}

function mapStateToProps({ main, form }) {
  return {
    main,
    form
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCategoryNav: () => dispatch(toggleCategoryNav()),
    // updateSortBy: (data) => dispatch(updateSortBy(data)),
    toggleSortOrderIsDescending: () => dispatch(toggleSortOrderIsDescending()),
    updateCurrentCategory: data => dispatch(updateCurrentCategory(data)),
    toggleNewPostModalIsOpen: () => dispatch(toggleNewPostModalIsOpen()),
    incrementNextPostId: () => dispatch(incrementNextPostId()),
    addPost: data => dispatch(addPost(data)),
    getAllCategories: () => dispatch(getAllCategories()),
    getAllPosts: () => dispatch(getAllPosts())
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainView)
);
