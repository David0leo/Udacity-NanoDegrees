export const TOGGLE_CATEGORY_NAV = 'TOGGLE_CATEGORY_NAV'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'
export const TOGGLE_SORT_ORDER_IS_DESCENDING = 'TOGGLE_SORT_ORDER_IS_DESCENDING'
export const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY'
export const TOGGLE_NEW_POST_MODAL_IS_OPEN = 'TOGGLE_NEW_POST_MODAL_IS_OPEN'
export const TOGGLE_NEW_COMMENT_MODAL_IS_OPEN = 'TOGGLE_NEW_COMMENT_MODAL_IS_OPEN'
export const TOGGLE_EDIT_POST_MODAL_IS_OPEN = 'TOGGLE_EDIT_POST_MODAL_IS_OPEN'
export const INCREMENT_NEXT_POST_ID = 'INCREMENT_NEXT_POST_ID'
export const INCREMENT_NEXT_COMMENT_ID = 'INCREMENT_NEXT_COMMENT_ID'
export const INITIALIZE_POST_FORM_VALUES = 'INITIALIZE_POST_FORM_VALUES'
export const INITIALIZE_COMMENT_FORM_VALUES = 'INITIALIZE_COMMENT_FORM_VALUES'
export const INITIALIZE_EDIT_POST = 'INITIALIZE_EDIT_POST'
export const ADD_POST = 'ADD_POST'
export const TOGGLE_EDIT_COMMENT_MODAL_IS_OPEN = 'TOGGLE_EDIT_COMMENT_MODAL_IS_OPEN'
export const INITIALIZE_EDIT_COMMENT = 'INITIALIZE_EDIT_COMMENT'

export function toggleCategoryNav() {
  return {
    type: TOGGLE_CATEGORY_NAV
  }
}

export function updateSortBy({sortBy}) {
  return {
    type: UPDATE_SORT_BY,
    sortBy
  }
}

export function toggleSortOrderIsDescending() {
  return {
    type: TOGGLE_SORT_ORDER_IS_DESCENDING
  }
}

export function updateCurrentCategory({currentCategory}) {
  return {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory
  }
}

export function toggleNewPostModalIsOpen() {
  return {
    type: TOGGLE_NEW_POST_MODAL_IS_OPEN
  }
}

export function toggleNewCommentModalIsOpen() {
  return {
    type: TOGGLE_NEW_COMMENT_MODAL_IS_OPEN
  }
}

export function toggleEditPostModalIsOpen(post) {
  return {
    type: TOGGLE_EDIT_POST_MODAL_IS_OPEN,
    post
  }
}

export function toggleEditCommentModalIsOpen(comment) {
  return {
    type: TOGGLE_EDIT_COMMENT_MODAL_IS_OPEN,
    comment
  }
}

export function incrementNextPostId() {
  return {
    type: INCREMENT_NEXT_POST_ID
  }
}

export function incrementNextCommentId() {
  return {
    type: INCREMENT_NEXT_COMMENT_ID
  }
}

export function initializePostFormValues({post}) {
  return {
    type: INITIALIZE_POST_FORM_VALUES,
    post
  }
}

export function initializeCommentFormValues({comment}) {
  return {
    type: INITIALIZE_COMMENT_FORM_VALUES,
    comment
  }
}

export function initializeEditPost(post) {
  return {
    type: INITIALIZE_EDIT_POST,
    post
  }
}

export function addPost({post}) {
  return {
    type: ADD_POST,
    post
  }
}

export function initializeEditComment(comment) {
  return {
    type: INITIALIZE_EDIT_COMMENT,
    comment
  }
}