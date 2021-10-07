import { Link } from "react-router-dom";
import moment from "moment";
import { Tag } from "antd";

// styles
import { HiOutlineClock } from "react-icons/hi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import "./SingleMovie.css";

function SingleMovie() {
  const movie = JSON.parse(localStorage.getItem("movie"));
  const credits = JSON.parse(localStorage.getItem("credits"));

  return (
    <div className={"selected-movie-wrapper"}>
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className={"background"} width={"100%"} />
      <Link to={"/"} className={"absolute top-10 left-11"}>
        <button className={"back"}>
          <IoReturnUpBackOutline /> Back
        </button>
      </Link>
      <div className={"movie-info"}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={"poster"} width={500} />
        <h1 className={"title"}>
          {movie.name ? movie.name : movie.original_title}
          <span className={"text-xl text-gray-400 font-semibold ml-3"}>({moment(movie.release_date).format("YYYY")})</span>
        </h1>
        <p className={"text-gray-300 col-start-2 col-span-2 text-base text-justify"}>{movie.overview}</p>
        <p className={"flex items-center text-gray-400 col-start-2 col-span-1"}>
          <HiOutlineClock /> <b className={"ml-2 mr-1"}>{movie.runtime ? movie.runtime : movie.episode_run_time[0]}</b>min
        </p>
        <h6 className={"text-white font-bold col-start-1 col-span-1 text-3xl"}>Stars</h6>
        <div className={"col-start-2 col-span-3 text-gray-400 grid grid-cols-12"}>
          {credits.cast.map(i => (
            <p className={"col-span-3"}>{i.name}</p>
          ))}
        </div>
        <h6 className={"text-white font-bold col-start-1 col-span-1 text-3xl"}>Genres</h6>
        <div className={"col-start-2 col-span-3 text-gray-400 "}>
          {movie.genres.map(i => (
            <Tag className={"genres_tag"}>{i.name}</Tag>
          ))}
        </div>
        {movie.homepage && (
          <>
            <h6 className={"text-white font-bold col-start-1 col-span-1 text-3xl"}>Website</h6>
            <div className={"col-start-2 col-span-3 text-gray-400 "}>
              <a href={movie.homepage} target={"_blank"} rel="noreferrer" className={"text-gray-400"}>
                {movie.homepage.slice(8)}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SingleMovie;
