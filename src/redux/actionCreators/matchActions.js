import axios from 'axios'
import {
  ADD_MATCH_FAIL,
  ADD_MATCH_REQUIEST,
  ADD_MATCH_SUCCESS,
  UPCOMING_MATCHES_FAIL,
  UPCOMING_MATCHES_REQUIEST,
  UPCOMING_MATCHES_SUCCESS,
} from '../actionTypes/actionTypes'

export const postNewMatch = (match) => async (dispatch) => {
  try {
    dispatch({ type: ADD_MATCH_REQUIEST })
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    await axios.post(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/upcoming-matches',
      match,
      config
    )
    dispatch({ type: ADD_MATCH_SUCCESS })
  } catch (error) {
    dispatch({
      type: ADD_MATCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUpcomingMatches = () => async (dispatch) => {
  try {
    dispatch({ type: UPCOMING_MATCHES_REQUIEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/upcoming-matches'
    )
    dispatch({ type: UPCOMING_MATCHES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: UPCOMING_MATCHES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
