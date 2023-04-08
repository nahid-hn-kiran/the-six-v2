import {
  ALL_ADMIN_FAIL,
  ALL_ADMIN_REQUIEST,
  ALL_ADMIN_SUCCESS,
  ALL_USER_FAIL,
  ALL_USER_REQUIEST,
  ALL_USER_SUCCESS,
  LOGGED_IN_USER_FAIL,
  LOGGED_IN_USER_REQUEST,
  LOGGED_IN_USER_RESET,
  LOGGED_IN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../actionTypes/actionTypes'
import axios from 'axios'

export const register = (user) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/users',
      user,
      config
    )
    dispatch({
      type: REGISTER_USER_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/users/login',
      user,
      config
    )
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    })
    localStorage.setItem('token', data.data.token)
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch({ type: LOGOUT_USER })
  dispatch({
    type: LOGGED_IN_USER_RESET,
  })
}

export const loggedInUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOGGED_IN_USER_REQUEST })
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/users/profile',
      config
    )
    dispatch({
      type: LOGGED_IN_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGGED_IN_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUIEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/users'
    )
    dispatch({
      type: ALL_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAllAdmins = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ADMIN_REQUIEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/users/admin'
    )
    dispatch({
      type: ALL_ADMIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
