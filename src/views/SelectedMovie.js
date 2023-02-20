import { ImageUrl } from "../tools/url";
import { Link } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import moment from "moment";
import { FloatButton, Tag, Tooltip } from "antd";

import "../styles/selectedMovie.css";

const SelectedMovie = () => {
  const movie_info = JSON.parse(localStorage.getItem("movie_info"));
  const credits = JSON.parse(localStorage.getItem("credits"));

  let toHours = n => `${(n / 60) ^ 0}h ${n % 60}m`;

  if (movie_info) {
    return (
      <div className="selected-movie-wrapper">
        <img
          src={ImageUrl("original") + movie_info.backdrop_path}
          alt={movie_info.title}
          className="background"
          width="100%"
        />
        <Link to={"/"} className="absolute top-10 left-11" onClick={() => localStorage.clear()}>
          <button className="back">
            <IoReturnUpBackOutline /> Back
          </button>
        </Link>
        <div className="movie-info">
          <img src={ImageUrl("w500") + movie_info.poster_path} alt={movie_info.title} className="poster" width={500} />
          <h1 className="title">
            {movie_info.original_name ? movie_info.original_name : movie_info.original_title}
            <span className="text-xl text-gray-400 font-semibold ml-3">
              ({moment(movie_info.release_date).format("YYYY")})
            </span>
          </h1>
          <p className="text-gray-300 col-start-2 col-span-2 text-base text-justify">{movie_info.overview}</p>
          {movie_info.runtime || movie_info.episode_run_time.length >= 1 ? (
            <p className="flex items-center text-gray-400 col-start-2 col-span-1">
              <HiOutlineClock />
              <b className="ml-2 mr-1">
                {movie_info.runtime
                  ? toHours(movie_info.runtime)
                  : movie_info.episode_run_time
                  ? toHours(movie_info.episode_run_time[0])
                  : ""}
              </b>
            </p>
          ) : (
            ""
          )}
          <h6 className="text-white-main font-bold col-start-1 col-span-1 text-3xl">Stars</h6>
          <div className="col-start-2 col-span-3 text-gray-400 grid grid-cols-12">
            {credits.cast.map(({ name, credit_id }) => (
              <p className="col-span-3" key={credit_id}>
                {name}
              </p>
            ))}
          </div>
          <h6 className="text-white-main font-bold col-start-1 col-span-1 text-3xl">Countries</h6>
          <div className="col-start-2 col-span-3 text-gray-400">
            {movie_info.production_countries.map(({ name, iso_3166_1 }) => (
              <h1 key={iso_3166_1}>{name}</h1>
            ))}
          </div>
          <h6 className="text-white-main font-bold col-start-1 col-span-1 text-3xl">Languages</h6>
          <div className="col-start-2 col-span-3 text-gray-400 grid grid-cols-12">
            {movie_info.spoken_languages.map(({ english_name, name }) => (
              <h1 className="col-span-3" key={name}>
                {english_name}
              </h1>
            ))}
          </div>
          <h6 className="text-white-main font-bold col-start-1 col-span-1 text-3xl">Genres</h6>
          <div className="col-start-2 col-span-3 text-gray-400">
            {movie_info.genres.map(({ name, id }) => (
              <Tag className="genres_tag" key={id}>
                {name}
              </Tag>
            ))}
          </div>
          <h6 className="text-white-main font-bold col-start-1 col-span-1 text-3xl">Production Companies</h6>
          <div className="col-start-2 col-span-3 text-gray-400 grid grid-cols-12 gap-2 items-center">
            {movie_info.production_companies.map(({ name, logo_path, id }) =>
              logo_path === null ? (
                <Tooltip
                  title={name}
                  key={id}
                  className="w-full h-16 p-2 rounded bg-yellow-main text-blue-dark font-bold text-sm bg-opacity-70 shadow-2xl">
                  <p className="col-span-3 flex justify-center items-center">{name}</p>
                </Tooltip>
              ) : (
                <Tooltip
                  title={name}
                  key={id}
                  className="w-full h-16 p-2 rounded bg-yellow-main bg-opacity-70 object-contain shadow-2xl">
                  <img src={ImageUrl("w500") + logo_path} className="col-span-2" width={100} alt={name} />
                </Tooltip>
              )
            )}
          </div>
          {movie_info.homepage && (
            <>
              <h6 className="text-white-main font-bold col-start-1 col-span-1 text-3xl">Website</h6>
              <div className="col-start-2 col-span-3 text-gray-400">
                <a href={movie_info.homepage} target="_blank" rel="noreferrer" className="text-gray-400 underline">
                  {movie_info.homepage.slice(8)}
                </a>
              </div>
            </>
          )}
          <FloatButton.BackTop className="absolute top-10 right-10" />
        </div>
      </div>
    );
  }
  <div>Loading...</div>;
};

export { SelectedMovie };
