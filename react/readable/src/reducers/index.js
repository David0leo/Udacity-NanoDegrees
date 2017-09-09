import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

// import actions

import {
  TOGGLE_CATEGORY_NAV,
  UPDATE_SORT_BY,
  TOGGLE_SORT_ORDER_IS_DESCENDING,
  UPDATE_CURRENT_CATEGORY,
  //maybe update post vote
  ADD_POST

} from '../actions'

//State for our main view, includes category view

const initialMainState = {
  categoryNavIsOpen: true,
  sortBy: 'Vote Score',
  sortOrderIsDescending: true,
  currentCategory: 'all',
  categories: ['all', 'test'],
  posts: []
}

function main(state=initialMainState, action) {
  const { 
    sortBy, 
    sortOrderIsDescending, 
    currentCategory, 
    post
  } = action

  switch (action.type) {
    case TOGGLE_CATEGORY_NAV:
      return {
        ...state,
        ['categoryNavIsOpen']: !state.categoryNavIsOpen
      }
    case UPDATE_SORT_BY:
      return {
        ...state,
        ['sortBy']: sortBy
      }
    case TOGGLE_SORT_ORDER_IS_DESCENDING:
      return {
        ...state,
        ['sortOrderIsDescending']: !state.sortOrderIsDescending
      }
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        ['currentCategory']: currentCategory
      }
    case ADD_POST:
      return {
        ...state,
        ['posts']: state.posts.concat(post)
      }
    // case EDIT_POST:
    //   return {
    //     ...state,
    //     ['posts']: {
    //       ...state['posts'],
    //       [post.id]:post

    //     }
    //   }
    default:
      return state
  }
}

export default combineReducers({
  main,
  form: reduxFormReducer
})