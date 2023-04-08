import {
  ADD_HERO_SLIDER_FAIL,
  ADD_HERO_SLIDER_REQUIEST,
  ADD_HERO_SLIDER_SUCCESS,
  HERO_SLIDER_FAIL,
  HERO_SLIDER_REQUIEST,
  HERO_SLIDER_SUCCESS,
} from '../actionTypes/actionTypes'

export const addHeroSliderReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_HERO_SLIDER_REQUIEST:
      return { loading: true }
    case ADD_HERO_SLIDER_SUCCESS:
      return { loading: false, success: true }
    case ADD_HERO_SLIDER_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}

export const heroSliderReducer = (state = {}, action) => {
  switch (action.type) {
    case HERO_SLIDER_REQUIEST:
      return { loading: true }
    case HERO_SLIDER_SUCCESS:
      return { loading: false, data: action.payload }
    case HERO_SLIDER_FAIL:
      return { loading: false, message: action.payload }
    default:
      return state
  }
}
