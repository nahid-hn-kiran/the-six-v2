import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUIEST,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUIEST,
  GET_CATEGORIES_SUCCESS,
} from '../actionTypes/actionTypes'

export const addCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUIEST:
      return { loading: true }
    case ADD_CATEGORY_SUCCESS:
      return { loading: false, success: true }
    case ADD_CATEGORY_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const getCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUIEST:
      return { loading: true }
    case GET_CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload }
    case GET_CATEGORIES_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
