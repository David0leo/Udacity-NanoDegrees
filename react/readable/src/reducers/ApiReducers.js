import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_POSTS_BY_CATEGORY_SUCCESS,
  LOAD_POST_SUCCESS,
  ADD_NEW_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  UP_VOTE_POST_BY_ID_SUCCESS,
  DOWN_VOTE_POST_BY_ID_SUCCESS
} from "../actions/ActionTypes";

const defaultApiState = {
  categories: [],
  posts: []
};

const API = (state = defaultApiState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...action.categories
      };
    case LOAD_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      };
    case LOAD_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.posts
      };
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.post.id) {
            post = action.post;
          }
          return post;
        })
      };
    case UP_VOTE_POST_BY_ID_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.id) {
            post.voteScore += 1;
          }
          return post;
        })
      };
    case DOWN_VOTE_POST_BY_ID_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.id) {
            post.voteScore -= 1;
          }
          return post;
        })
      };
    default:
      return state;
  }
};

export default API;
