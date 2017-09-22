import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_POSTS_BY_CATEGORY_SUCCESS,
  LOAD_POST_SUCCESS,
  ADD_NEW_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  UP_VOTE_POST_BY_ID_SUCCESS,
  DOWN_VOTE_POST_BY_ID_SUCCESS,
  DELETE_POST_BY_ID_SUCCESS,
  LOAD_COMMENTS_BY_POST_ID_SUCCESS,
  ADD_COMMENT_SUCCESS,
  LOAD_COMMENT_BY_COMMENT_ID_SUCCESS,
  UP_VOTE_COMMENT_BY_COMMENT_ID_SUCCESS,
  DOWN_VOTE_COMMENT_BY_COMMENT_ID_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT_BY_COMMENT_ID_SUCCESS,
  LOAD_COMMENTS_AND_UPDATE_COMMENT_COUNT_BY_POST_ID_SUCCESS
} from "../actions/ActionTypes";

const defaultApiState = {
  categories: [],
  posts: [],
  comments: {}
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
    case DELETE_POST_BY_ID_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.id) {
            post.deleted = true;
          }
          return post;
        })
      };
    case LOAD_COMMENTS_BY_POST_ID_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: action.comments
        }
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: action.comment
        }
      };
    case LOAD_COMMENT_BY_COMMENT_ID_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: action.comment
        }
      };
    case UP_VOTE_COMMENT_BY_COMMENT_ID_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.parentId]: {
            ...state.comments[action.parentId],
            voteScore: state.comments[action.parentId].voteScore + 1
          }
        }
      };
    case DOWN_VOTE_COMMENT_BY_COMMENT_ID_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.parentId]: {
            ...state.comments[action.parentId],
            voteScore: state.comments[action.parentId].voteScore - 1
          }
        }
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: {
            ...state.comments[action.comment.parentId],
            timestamp: action.comment.timestamp,
            body: action.comment.body
          }
        }
      };
    case DELETE_COMMENT_BY_COMMENT_ID_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.parentId]: {
            ...state.comments[action.parentId],
            deleted: true
          }
        }
      };
    case LOAD_COMMENTS_AND_UPDATE_COMMENT_COUNT_BY_POST_ID_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: action.comments
        },
        posts: state.posts.map(post => {
          if (post.id === action.id) {
            post.commentCount = action.comments.length;
          }
          return post;
        })
      };
    default:
      return state;
  }
};

export default API;
