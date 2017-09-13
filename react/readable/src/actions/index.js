export const TOGGLE_CATEGORY_NAV = 'TOGGLE_CATEGORY_NAV'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'
export const TOGGLE_SORT_ORDER_IS_DESCENDING = 'TOGGLE_SORT_ORDER_IS_DESCENDING'
export const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY'
export const TOGGLE_NEW_POST_MODAL_IS_OPEN = 'TOGGLE_NEW_POST_MODAL_IS_OPEN'
export const INCREMENT_NEXT_POST_ID = 'INCREMENT_NEXT_POST_ID'
export const ADD_POST = 'ADD_POST'

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

export function incrementNextPostId() {
  return {
    type: INCREMENT_NEXT_POST_ID
  }
}

export function addPost({post}) {
  return {
    type: ADD_POST,
    post
  }
}