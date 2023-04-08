import axios from 'axios'
import {
  ADD_TAG_FAIL,
  ADD_TAG_REQUIEST,
  ADD_TAG_SUCCESS,
  GET_TAGS_FAIL,
  GET_TAGS_REQUIEST,
  GET_TAGS_SUCCESS,
} from '../actionTypes/actionTypes'

export const addTag = (tag) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TAG_REQUIEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/tag',
      tag,
      config
    )
    dispatch({
      type: ADD_TAG_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: ADD_TAG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getTags = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TAGS_REQUIEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/tag'
    )
    dispatch({
      type: GET_TAGS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_TAGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
