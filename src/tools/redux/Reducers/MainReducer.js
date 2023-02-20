import {
  SET_MOVIE_LIST,
  SET_SHOWS_LIST,
  SET_TYPE,
  SET_SELECTED_MOVIE,
  SET_MOVIE_ID,
  SET_CATEGORY,
  SET_VIEW_ALL,
  SET_GENRES_LIST,
  SET_SEARCHED_MOVIE,
} from "../Actions/Types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  movie_list: [],
  shows_list: [],
  genres_list: [],
  movie_id: null,
  selected_movie: {},
  type: "upcoming",
  category: "movie",
  loading: false,
  view_all: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return { ...state, movie_list: action.payload };
    case SET_SHOWS_LIST:
      return { ...state, shows_list: action.payload };
    case SET_GENRES_LIST:
      return { ...state, genres_list: action.payload };
    case SET_TYPE:
      return { ...state, type: action.payload };
    case SET_SELECTED_MOVIE:
      return { ...state, selected_movie: action.payload };
    case SET_MOVIE_ID:
      return { ...state, movie_id: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_VIEW_ALL:
      return { ...state, view_all: action.payload };
    case SET_SEARCHED_MOVIE:
      return { ...state, movie_list: action.payload };
    default:
      return state;
  }
};
