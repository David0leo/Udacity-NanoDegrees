export const TOGGLE_CATEGORY_NAV = 'TOGGLE_CATEGORY_NAV'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'
export const TOGGLE_SORT_ORDER_IS_DESCENDING = 'UPDATE_SORT_ORDER'
export const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY'
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

export function toggleSortOrderIsDescending({sortOrderIsDescending}) {
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

export function addPost({post}) {
  return {
    type: ADD_POST,
    post
  }
}