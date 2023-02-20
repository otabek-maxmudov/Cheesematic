import {
  SET_MOVIE_LIST,
  SET_VIEW_ALL,
  SET_TYPE,
  SET_SELECTED_MOVIE,
  SET_MOVIE_ID,
  SET_CATEGORY,
  SET_GENRES_LIST,
  SET_SEARCHED_MOVIE,
} from "./Types";

import Api from "../../url";

export const setType = data => dispatch => dispatch({ type: SET_TYPE, payload: data });
export const setMovieId = data => dispatch => dispatch({ type: SET_MOVIE_ID, payload: data });
export const setCategory = data => dispatch => dispatch({ type: SET_CATEGORY, payload: data });
export const setViewAll = data => dispatch => dispatch({ type: SET_VIEW_ALL, payload: data });

export const setMovieList = (category, type) => async dispatch => {
  const [movies, tv_shows] = await Promise.all([Api("/movie/upcoming", "get"), Api("/tv/airing_today", "get")]);
  if (movies.status === 200 || tv_shows.status === 200) {
    dispatch({ type: SET_MOVIE_LIST, payload: (category === "movie" ? movies : tv_shows).data.results });
  }
};
export const getSearchedMovie = (type, data) => async dispatch => {
  let query = {};
  data ? (query = { query: data }) : (query = {});
  const movie = await Api(`/search/${type}`, "get", query);
  movie.status === 200 && dispatch({ type: SET_SEARCHED_MOVIE, payload: movie.data.results });
};

export const getMovieList = (category, type) => async dispatch => {
  const { data } = await Api(`/${category}/${type}`, "get");
  const genres = await Api(`/genre/${category}/list`, "get");

  dispatch({ type: SET_MOVIE_LIST, payload: data.results });
  dispatch({ type: SET_GENRES_LIST, payload: genres.data.genres });
};

export const setCurrentMovie = (category, id) => async dispatch => {
  const [credits, movie_info] = await Promise.all([
    Api(`/${category}/${id}/credits`, "get"),
    Api(`/${category}/${id}`, "get"),
  ]);

  localStorage.setItem("credits", JSON.stringify(credits.data));
  localStorage.setItem("movie_info", JSON.stringify(movie_info.data));

  dispatch({
    type: SET_SELECTED_MOVIE,
    payload: { movie: movie_info.data, credits: credits.data },
  });
};
