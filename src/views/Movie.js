import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageUrl } from "../tools/url";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { setCurrentMovie, setMovieId, setViewAll } from "../tools/redux/Actions/Actions";

import "../styles/movie.css";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/scss/thumbs";

const Movie = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { movie_list, category } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 gap-x-6 h-full">
      <div className="swiper-container mt-2">
        <Swiper
          navigation
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Thumbs, Navigation]}
          className="selected-movie">
          {movie_list &&
            movie_list.slice(0, 4).map((movie, index) => {
              const { backdrop_path, poster_path, id, title, name } = movie;

              return (
                <SwiperSlide key={id} className="w-full">
                  <img
                    src={ImageUrl("original") + backdrop_path}
                    loading="lazy"
                    alt={title}
                    width={765}
                    height={755}
                    className="object-fill"
                  />
                  <Link
                    to={`/${category}/${id}`}
                    onClick={() => {
                      dispatch(setMovieId(id));
                      dispatch(setCurrentMovie(category, id));
                    }}>
                    <img
                      src={ImageUrl("original") + poster_path}
                      loading="lazy"
                      alt={title}
                      width={500}
                      height={500}
                      className="poster"
                    />
                  </Link>

                  <h1 className="text-center mt-4 text-xl font-semibold text-turquoise-main">{title ? title : name}</h1>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="col-span-1 h-full flex flex-wrap justify-end">
        <button
          onClick={() => dispatch(setViewAll(true))}
          className="text-blue-tint hover:text-blue-gray transition-colors text-sm tracking-wide font-semibold">
          View all
        </button>
        <Swiper onSwiper={setThumbsSwiper} className="movie-list">
          {movie_list &&
            movie_list.slice(0, 4).map(({ poster_path, id, title, release_date, vote_average, name }) => (
              <SwiperSlide key={id}>
                <img
                  src={ImageUrl("original") + poster_path}
                  loading="lazy"
                  alt={title}
                  width={500}
                  height={500}
                  className="rounded-md"
                />
                <div className="movie-info">
                  <h1 className="text-white-primary text-xs font-bold">{title ? title : name}</h1>
                  <span className="text-xs text-blue-tint font-semibold">
                    Release date: <br />
                    {moment(release_date).format("Do MMM YYYY")}
                  </span>
                  <span className="text-xs text-blue-tint font-semibold">
                    <Rate allowHalf defaultValue={vote_average / 2.5} disabled className="text-xs mr-2" />
                    {vote_average}
                  </span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(Movie);
