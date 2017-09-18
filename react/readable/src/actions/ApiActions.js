import API from '../utils/ReadableApi'
import { LOAD_CATEGORIES_SUCCESS } from './ActionTypes'

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