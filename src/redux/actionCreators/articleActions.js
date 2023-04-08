import axios from 'axios'
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

export const addArticle = (article) => async (dispatch) => {
  try {
    dispatch({ type: ADD_NEW_ARTICLE_REQUEST })
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    await axios.post(
      `https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles`,
      article,
      config
    )
    dispatch({ type: ADD_NEW_ARTICLE_SUCCESS, payload: true })
  } catch (error) {
    dispatch({
      type: ADD_NEW_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ARTICLE_REQUEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles'
    )
    dispatch({ type: GET_ALL_ARTICLE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: GET_ALL_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getFirstTwoArticle = () => async (dispatch) => {
  try {
    dispatch({ type: FIRST_TWO_ARTICLE_REQUEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles/getfirsttwo'
    )
    dispatch({ type: FIRST_TWO_ARTICLE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FIRST_TWO_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getEightArticles = () => async (dispatch) => {
  try {
    dispatch({ type: EIGHT_ARTICLES_REQUEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles/get-eight-articles'
    )
    dispatch({ type: EIGHT_ARTICLES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: EIGHT_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getTwoArticleBottom = () => async (dispatch) => {
  try {
    dispatch({ type: TWO_ARTICLES_BOTTOM_REQUEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles/get-two-articles-bottom'
    )
    dispatch({ type: TWO_ARTICLES_BOTTOM_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: TWO_ARTICLES_BOTTOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getFeaturedArticles = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURED_ARTICLES_REQUEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles/featured-article'
    )
    dispatch({ type: FEATURED_ARTICLES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FEATURED_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getArticleById = (articleId) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_BY_ID_REQUIEST })
    const { data } = await axios.get(
      `https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles/${articleId}`
    )
    dispatch({ type: ARTICLE_BY_ID_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ARTICLE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const postComment = (articleId, comment) => async (dispatch) => {
  try {
    dispatch({ type: POST_COMMENT_REQUIEST })
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    await axios.post(
      `https://tame-pear-vulture-kilt.cyclic.app/api/v1/articles/${articleId}/comment`,
      comment,
      config
    )
    dispatch({ type: POST_COMMENT_SUCCESS, payload: true })
  } catch (error) {
    dispatch({
      type: POST_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
