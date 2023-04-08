import {
  UPCOMING_MATCHES_FAIL,
  UPCOMING_MATCHES_REQUIEST,
  UPCOMING_MATCHES_SUCCESS,
} from '../actionTypes/actionTypes'

export const upcomingMatchesReducer = (state = {}, action) => {
  switch (action.type) {
    case UPCOMING_MATCHES_REQUIEST:
      return { loading: true }
    case UPCOMING_MATCHES_SUCCESS:
      return { loading: false, data: action.payload }
    case UPCOMING_MATCHES_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
