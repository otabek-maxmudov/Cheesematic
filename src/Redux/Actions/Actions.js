import Api from "../../Functions/Api";
import { SET_GENRES, SET_MOVIE_LIST, SET_TYPE, SET_CATEGORY, SET_CURRENT_MOVIE, SET_LOADING } from "./Types";

export let noInternet = false;
export const getMovieList = (url, params) => async dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });
  const res = await Api(url, "GET", params);

  if (res && res.status === 200) {
    dispatch({
      type: SET_MOVIE_LIST,
      payload: res.data.results,
    });
  }
  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};
export const getGenres = (url, params) => async dispatch => {
  const res = await Api(url, "GET", params);
  if (res && res.status === 200) {
    dispatch({
      type: SET_GENRES,
      payload: res.data.genres,
    });
  }
};

export const setLoading = data => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: data,
  });
};

export const setType = data => dispatch => {
  dispatch({
    type: SET_TYPE,
    payload: data,
  });
};
export const setCategory = data => dispatch => {
  dispatch({
    type: SET_CATEGORY,
    payload: data,
  });
};
export const setSearching = (url, data) => async dispatch => {
  let query = {};
  data ? (query = { query: data }) : (query = {});
  const res = await Api(url, "GET", query);
  res && res.data?.total_pages === 0 ? (noInternet = true) : (noInternet = false);

  dispatch({
    type: SET_MOVIE_LIST,
    payload: res.data ? res.data?.results : [],
  });
};
export const setCurrentMovie = (url, id) => async dispatch => {
  const res = await Api(`/${url}/${id}`, "GET");
  const credits = await Api(`/${url}/${id}/credits`, "GET");
  localStorage.setItem("movie", JSON.stringify(res.data));
  localStorage.setItem("credits", JSON.stringify(credits.data));
  dispatch({
    type: SET_CURRENT_MOVIE,
    payload: res.data,
  });
};
