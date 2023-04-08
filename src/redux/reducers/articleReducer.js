import {
  ADD_NEW_ARTICLE_FAIL,
  ADD_NEW_ARTICLE_REQUEST,
  ADD_NEW_ARTICLE_SUCCESS,
  ARTICLE_BY_ID_FAIL,
  ARTICLE_BY_ID_REQUIEST,
  ARTICLE_BY_ID_SUCCESS,
  EIGHT_ARTICLES_FAIL,
  EIGHT_ARTICLES_REQUEST,
  EIGHT_ARTICLES_SUCCESS,
  FEATURED_ARTICLES_FAIL,
  FEATURED_ARTICLES_REQUEST,
  FEATURED_ARTICLES_SUCCESS,
  FIRST_TWO_ARTICLE_FAIL,
  FIRST_TWO_ARTICLE_REQUEST,
  FIRST_TWO_ARTICLE_SUCCESS,
  GET_ALL_ARTICLE_FAIL,
  GET_ALL_ARTICLE_REQUEST,
  GET_ALL_ARTICLE_SUCCESS,
  POST_COMMENT_FAIL,
  POST_COMMENT_REQUIEST,
  POST_COMMENT_SUCCESS,
  TWO_ARTICLES_BOTTOM_FAIL,
  TWO_ARTICLES_BOTTOM_REQUEST,
  TWO_ARTICLES_BOTTOM_SUCCESS,
} from '../actionTypes/actionTypes'

export const addNewArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_ARTICLE_REQUEST:
      return { loading: true }
    case ADD_NEW_ARTICLE_SUCCESS:
      return { loading: false, success: true }
    case ADD_NEW_ARTICLE_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const allArticlesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLE_REQUEST:
      return { loading: true }
    case GET_ALL_ARTICLE_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_ALL_ARTICLE_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const firstTwoArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case FIRST_TWO_ARTICLE_REQUEST:
      return { loading: true }
    case FIRST_TWO_ARTICLE_SUCCESS:
      return { loading: false, data: action.payload }
    case FIRST_TWO_ARTICLE_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const eightArticlesReducer = (state = {}, action) => {
  switch (action.type) {
    case EIGHT_ARTICLES_REQUEST:
      return { loading: true }
    case EIGHT_ARTICLES_SUCCESS:
      return { loading: false, data: action.payload }
    case EIGHT_ARTICLES_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
export const twoArticleBottom = (state = {}, action) => {
  switch (action.type) {
    case TWO_ARTICLES_BOTTOM_REQUEST:
      return { loading: true }
    case TWO_ARTICLES_BOTTOM_SUCCESS:
      return { loading: false, data: action.payload }
    case TWO_ARTICLES_BOTTOM_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
export const featuredArticles = (state = {}, action) => {
  switch (action.type) {
    case FEATURED_ARTICLES_REQUEST:
      return { loading: true }
    case FEATURED_ARTICLES_SUCCESS:
      return { loading: false, data: action.payload }
    case FEATURED_ARTICLES_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
export const articleByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_BY_ID_REQUIEST:
      return { loading: true }
    case ARTICLE_BY_ID_SUCCESS:
      return { loading: false, data: action.payload }
    case ARTICLE_BY_ID_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const postCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_COMMENT_REQUIEST:
      return { loading: true }
    case POST_COMMENT_SUCCESS:
      return { loading: false, success: action.payload }
    case POST_COMMENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
