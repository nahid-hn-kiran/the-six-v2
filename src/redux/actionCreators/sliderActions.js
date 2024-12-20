import axios from "axios";
import {
  ADD_HERO_SLIDER_FAIL,
  ADD_HERO_SLIDER_REQUIEST,
  ADD_HERO_SLIDER_SUCCESS,
  HERO_SLIDER_FAIL,
  HERO_SLIDER_REQUIEST,
  HERO_SLIDER_SUCCESS,
} from "../actionTypes/actionTypes";

export const postHeroSlider = (slider) => async (dispatch) => {
  try {
    dispatch({ type: ADD_HERO_SLIDER_REQUIEST });
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(
      "https://the-six-server-alpha.vercel.app/api/v1/heroslider",
      slider,
      config
    );
    dispatch({
      type: ADD_HERO_SLIDER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ADD_HERO_SLIDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getHeroslider = () => async (dispatch) => {
  try {
    dispatch({ type: HERO_SLIDER_REQUIEST });
    const { data } = await axios.get(
      "https://the-six-server-alpha.vercel.app/api/v1/heroslider"
    );
    dispatch({ type: HERO_SLIDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: HERO_SLIDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
