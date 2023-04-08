import axios from 'axios'
import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUIEST,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUIEST,
  GET_CATEGORIES_SUCCESS,
} from '../actionTypes/actionTypes'

export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CATEGORY_REQUIEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/category',
      category,
      config
    )
    dispatch({
      type: ADD_CATEGORY_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: ADD_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_REQUIEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/category'
    )
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
