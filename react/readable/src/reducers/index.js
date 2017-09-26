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
  TOGGLE_NEW_COMMENT_MODAL_IS_OPEN,
  TOGGLE_EDIT_POST_MODAL_IS_OPEN,
  TOGGLE_EDIT_COMMENT_MODAL_IS_OPEN,
  INCREMENT_NEXT_POST_ID,
  INCREMENT_NEXT_COMMENT_ID,
  INITIALIZE_POST_FORM_VALUES,
  INITIALIZE_COMMENT_FORM_VALUES,
  INITIALIZE_EDIT_POST,
  INITIALIZE_EDIT_COMMENT,
  ADD_POST
} from '../actions'

//State for our main view, includes category view

// TODO: setup users and UUID + some user data for post / comment id's
// these are 'random' but not unique
const initialMainState = {
  categoryNavIsOpen: true,
  sortBy: 'Vote Score',
  sortOrderIsDescending: true,
  currentCategory: 'all',
  categories: ['all', 'test'],
  newPostModalIsOpen: false,
  editPostModalIsOpen: false,
  editCommentModalIsOpen: false,
  loadedPost: {},
  loadedComment: {},
  nextPostId: (Math.floor(Math.random() * 1000000)).toString(),
  nextCommentId: Math.floor(Math.random() * 1000000),
  posts: {}
}

export const main = (state=initialMainState, action) => {
  const { 
    sortBy,
    currentCategory,
    post,
    comment
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
    case TOGGLE_NEW_COMMENT_MODAL_IS_OPEN:
      return {
        ...state,
        newCommentModalIsOpen: !state.newCommentModalIsOpen
      }
    case TOGGLE_EDIT_POST_MODAL_IS_OPEN:
      return {
        ...state,
        editPostModalIsOpen: !state.editPostModalIsOpen,
        loadedPost: post
      }
    case TOGGLE_EDIT_COMMENT_MODAL_IS_OPEN:
      return {
        ...state,
        editCommentModalIsOpen: !state.editCommentModalIsOpen,
        loadedComment: comment
      }
    case INCREMENT_NEXT_POST_ID:
      return {
        ...state,
        nextPostId: (parseInt(state.nextPostId, 10) + 1).toString()
      }
    case INCREMENT_NEXT_COMMENT_ID:
      return {
        ...state,
        nextCommentId: (parseInt(state.nextCommentId, 10) + 1).toString()
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
  comment: {
    id: '',
    timestamp: Date.now(),
    body: '',
    author: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
    parendId: ''
  },
  loadedPost: {
    title: 'test',
    body: 'test'
  },
  loadedComment: {
    title: 'test',
    body: 'test'
  }
}

export const load = (state=initialLoadPostState, action) => {
  switch (action.type) {
    case INITIALIZE_POST_FORM_VALUES:
      return {
        ...state,
        post: action.post
      }
    case INITIALIZE_COMMENT_FORM_VALUES:
      return {
        ...state,
        comment: action.comment
      }
    case INITIALIZE_EDIT_POST:
      return {
        ...state,
        loadedPost: action.post
      }
    case INITIALIZE_EDIT_COMMENT:
      return {
        ...state,
        loadedComment: action.comment
      }
    default:
      return state
  }
}

export default combineReducers({
  main,
  load,
  API,
  form: reduxFormReducer
})