import { LOAD_CATEGORIES_SUCCESS } from '../actions/ActionTypes'

const defaultApiState = {
  categories: []
}

const apiReducer = (state = defaultApiState, action) => {  
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...action.categories
      }
    default: 
      return state;
  }
}

export default apiReducer