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
  TOGGLE_EDIT_POST_MODAL_IS_OPEN,
  INCREMENT_NEXT_POST_ID,
  //maybe update post vote
  INITIALIZE_POST_FORM_VALUES,
  INITIALIZE_EDIT_POST,
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
  editPostModalIsOpen: false,
  loadedPost: {},
  nextPostId: '0',
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
    case TOGGLE_EDIT_POST_MODAL_IS_OPEN:
      return {
        ...state,
        editPostModalIsOpen: !state.editPostModalIsOpen,
        loadedPost: post
      }
    case INCREMENT_NEXT_POST_ID:
      return {
        ...state,
        nextPostId: (parseInt(state.nextPostId, 10) + 1).toString()
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
  },
  loadedPost: {
    title: 'test',
    body: 'test'
  }
}

export const loadPost = (state=initialLoadPostState, action) => {
  switch (action.type) {
    case INITIALIZE_POST_FORM_VALUES:
      return {
        ...state,
        post: action.post
      }
    case INITIALIZE_EDIT_POST:
      return {
        ...state,
        loadedPost: action.post
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