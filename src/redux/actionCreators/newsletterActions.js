import axios from 'axios'
import {
  NEWSlETTER_SUBSCRIBERS_FAIL,
  NEWSlETTER_SUBSCRIBERS_REQUIEST,
  NEWSlETTER_SUBSCRIBERS_SUCCESS,
  SUBSCRIBE_NEWSLETTER_FAIL,
  SUBSCRIBE_NEWSLETTER_REQUIEST,
  SUBSCRIBE_NEWSLETTER_SUCCESS,
} from '../actionTypes/actionTypes'

export const subscribeNewsletter = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIBE_NEWSLETTER_REQUIEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/newsletter',
      userData,
      config
    )
    dispatch({ type: SUBSCRIBE_NEWSLETTER_SUCCESS, payload: true })
  } catch (error) {
    dispatch({
      type: SUBSCRIBE_NEWSLETTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getNewsletterSubscribers = () => async (dispatch) => {
  try {
    dispatch({ type: NEWSlETTER_SUBSCRIBERS_REQUIEST })
    const { data } = await axios.get(
      'https://tame-pear-vulture-kilt.cyclic.app/api/v1/newsletter'
    )
    dispatch({ type: NEWSlETTER_SUBSCRIBERS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: NEWSlETTER_SUBSCRIBERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
