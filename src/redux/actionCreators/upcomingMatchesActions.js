import axios from 'axios'
import {
  UPCOMING_MATCHES_FAIL,
  UPCOMING_MATCHES_REQUIEST,
  UPCOMING_MATCHES_SUCCESS,
} from '../actionTypes/actionTypes'

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
