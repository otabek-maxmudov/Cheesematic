import { SET_GENRES, SET_MOVIE_LIST, SET_LOADING, SET_TYPE, SET_CATEGORY, SET_CURRENT_MOVIE } from "../Actions/Types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  movieList: [],
  genres: [],
  type: "movie",
  category: "upcoming",
  currentMovie: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
