import API from '../utils/ReadableApi'

import { 
  LOAD_CATEGORIES_SUCCESS, 
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_POSTS_BY_CATEGORY_SUCCESS
} from './ActionTypes'

export function getAllCategories() {
  return function(dispatch) {
    return API.getAllCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadCategoriesSuccess(categories) {  
  return {type: LOAD_CATEGORIES_SUCCESS, categories};
}

export function getAllPosts() {
  return function(dispatch) {
    return API.getAllPosts().then(posts => {
      dispatch(loadAllPostsSuccess(posts))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadAllPostsSuccess(posts) {
  return {type: LOAD_ALL_POSTS_SUCCESS, posts}
}

export function getPostsByCategory(category) {
  return function(dispatch) {
    return API.getPostsByCategory(category).then(posts => {
      dispatch(loadPostsByCategorySuccess(posts))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadPostsByCategorySuccess(posts) {
  return {type: LOAD_POSTS_BY_CATEGORY_SUCCESS, posts}
}