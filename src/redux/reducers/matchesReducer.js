import {
  ADD_MATCH_FAIL,
  ADD_MATCH_REQUIEST,
  ADD_MATCH_SUCCESS,
} from '../actionTypes/actionTypes'

export const addMatchReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MATCH_REQUIEST:
      return { loading: true }
    case ADD_MATCH_SUCCESS:
      return { loading: false, success: true }
    case ADD_MATCH_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
