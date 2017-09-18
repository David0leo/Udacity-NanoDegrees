import { 
  LOAD_CATEGORIES_SUCCESS, 
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_POSTS_BY_CATEGORY_SUCCESS,
} from '../actions/ActionTypes'

const defaultApiState = {
  categories: [],
  posts: []
}

const API = (state = defaultApiState, action) => {  
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...action.categories
      }
    case LOAD_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      }
    case LOAD_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.posts
      }
    default: 
      return state;
  }
}

export default API