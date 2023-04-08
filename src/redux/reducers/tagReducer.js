import {
  ADD_TAG_FAIL,
  ADD_TAG_REQUIEST,
  ADD_TAG_SUCCESS,
  GET_TAGS_FAIL,
  GET_TAGS_REQUIEST,
  GET_TAGS_SUCCESS,
} from '../actionTypes/actionTypes'

export const addTagReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAG_REQUIEST:
      return { loading: true }
    case ADD_TAG_SUCCESS:
      return { loading: false, success: true }
    case ADD_TAG_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const getTagsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TAGS_REQUIEST:
      return { loading: true }
    case GET_TAGS_SUCCESS:
      return { loading: false, tags: action.payload }
    case GET_TAGS_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
