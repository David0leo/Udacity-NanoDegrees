import API from '../utils/ReadableApi'

import { 
  LOAD_CATEGORIES_SUCCESS, 
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_POSTS_BY_CATEGORY_SUCCESS,
  LOAD_POST_SUCCESS,
  ADD_NEW_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  UP_VOTE_POST_BY_ID_SUCCESS,
  DOWN_VOTE_POST_BY_ID_SUCCESS,
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

export function getPostById(id) {
  return function(dispatch) {
    return API.getPostById(id).then(post => {
      dispatch(loadPostSuccess(post))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadPostSuccess(post) {
  return {type: LOAD_POST_SUCCESS, post}
}

export function addNewPost(post) {
  return function(dispatch) {
    return API.addNewPost(post).then(post => {
      dispatch(addNewPostSuccess(post))
    }).catch(error => {
      throw(error)
    })
  }
}

export function addNewPostSuccess(post) {
  return {type: ADD_NEW_POST_SUCCESS, post}
}

export function editPost(post) {
  return function(dispatch) {
    return API.editPost(post).then(post => {
      dispatch(editPostSuccess(post))
    }).catch(error => {
      throw(error)
    })
  }
}

export function editPostSuccess(post) {
  return {type: EDIT_POST_SUCCESS, post}
}

export function upVotePostById(id) {
  return function(dispatch) {
    return API.upVotePostById(id).then(id => {
      dispatch(upVotePostByIdSuccess(id))
    }).catch(error => {
      throw(error)
    })
  }
}

export function upVotePostByIdSuccess(id) {
  return {type: UP_VOTE_POST_BY_ID_SUCCESS, id}
}

export function downVotePostById(id) {
  return function(dispatch) {
    return API.downVotePostById(id).then(id => {
      dispatch(downVotePostByIdSuccess(id))
    }).catch(error => {
      throw(error)
    })
  }
}

export function downVotePostByIdSuccess(id) {
  return {type: UP_VOTE_POST_BY_ID_SUCCESS, id}
}