import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import API from './ApiReducers'


// import actions

import {
  TOGGLE_CATEGORY_NAV,
  UPDATE_SORT_BY,
  TOGGLE_SORT_ORDER_IS_DESCENDING,
  UPDATE_CURRENT_CATEGORY,
  TOGGLE_NEW_POST_MODAL_IS_OPEN,
  INCREMENT_NEXT_POST_ID,
  //maybe update post vote
  INITIALIZE_POST_FORM_VALUES,
  ADD_POST

} from '../actions'

//State for our main view, includes category view

const initialMainState = {
  categoryNavIsOpen: true,
  sortBy: 'Vote Score',
  sortOrderIsDescending: true,
  currentCategory: 'all',
  categories: ['all', 'test'],
  newPostModalIsOpen: false,
  nextPostId: 0,
  posts: {}
}

export const main = (state=initialMainState, action) => {
  const { 
    sortBy,
    currentCategory,
    post
  } = action

  switch (action.type) {
    case TOGGLE_CATEGORY_NAV:
      return {
        ...state,
        categoryNavIsOpen: !state.categoryNavIsOpen
      }
    case UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: sortBy
      }
    case TOGGLE_SORT_ORDER_IS_DESCENDING:
      return {
        ...state,
        sortOrderIsDescending: !state.sortOrderIsDescending
      }
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: currentCategory
      }
    case TOGGLE_NEW_POST_MODAL_IS_OPEN:
      return {
        ...state,
        newPostModalIsOpen: !state.newPostModalIsOpen
      }
    case INCREMENT_NEXT_POST_ID:
      return {
        ...state,
        nextPostId: state.nextPostId += 1
      }
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: post
        }
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

const initialLoadPostState = {
  post: {
    id: '',
    timestamp: Date.now(),
    title: '',
    body: '',
    author: '',
    category: 'all',
    voteScore: 0,
    deleted: false
  }
}

export const loadPost = (state=initialLoadPostState, action) => {
  switch (action.type) {
    case INITIALIZE_POST_FORM_VALUES:
      return {
        post: action.post
      }
    default:
      return state
  }
}

export default combineReducers({
  main,
  loadPost,
  API,
  form: reduxFormReducer
})