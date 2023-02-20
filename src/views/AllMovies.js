import moment from "moment";
import { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageUrl } from "../tools/url";
import { FcLike } from "react-icons/fc";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { setCurrentMovie, setMovieId, setViewAll } from "../tools/redux/Actions/Actions";
import { Link } from "react-router-dom";

import "../styles/all_movies.css";

const AllMovies = memo(() => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { movie_list, category, genres_list } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const ref = useRef();

  const getscroll = () => setScrollPosition(ref.current.scrollTop);

  return (
    <>
      <div className="all-movie-header">
        <button
          className="w-20 text-lg text-white-main flex items-center justify-between"
          onClick={() => dispatch(setViewAll(false))}>
          <IoReturnUpBackOutline /> Back
        </button>
      </div>
      <div
        className="all-movies"
        onScroll={getscroll}
        ref={ref}
        style={{
          WebkitMaskImage: `linear-gradient(to bottom, ${
            scrollPosition === 0 ? "#000" : "#0000"
          }, #000, #000, #000, #000, #000, #000, #000, #000, #000, ${scrollPosition === 948 ? "#000" : "#0000"})`,
        }}>
        {movie_list.map(({ id, poster_path, title, release_date, popularity, genre_ids, original_name, name }) => (
          <Link
            key={id}
            to={`/${category}/${id}`}
            onClick={() => {
              dispatch(setMovieId(id));
              dispatch(setCurrentMovie(category, id));
            }}
            className="movie-card-wrapper">
            <div className="h-86 movie-card">
              <div className="h-66 overflow-hidden">
                <img src={ImageUrl("w500") + poster_path} alt={title} className="h-68" />
              </div>
              <div className="h-20 flex flex-wrap justify-between p-3 text-blue-tint">
                <p className="w-full self-start text-sm text-white-primary truncate">
                  {title ? title : name ? name : original_name}
                </p>
                <span className="badge">{moment(release_date).format("YYYY")}</span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-xs">{genres_list.find(({ id, name }) => id === genre_ids[0])?.name}</span>
                  <span className="flex gap-x-2 text-xs">
                    <FcLike />
                    {parseInt(popularity)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
});

export { AllMovies };
