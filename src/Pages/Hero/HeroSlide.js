import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMovieList, setCurrentMovie } from "../../Redux/Actions/Actions";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Mousewheel, Pagination, Lazy } from "swiper";
import moment from "moment";
import { Link } from "react-router-dom";

// styles
import { TiStarFullOutline } from "react-icons/ti";
import "./Hero.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination";
import "swiper/components/lazy";

function HeroSlide({ movieList, getMovieList, category, type, setCurrentMovie }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  SwiperCore.use([Navigation, Thumbs, Mousewheel, Pagination, Lazy]);

  useEffect(() => {
    getMovieList(`${type}/${category}`);
  }, []);

  return (
    <div className={"hero"}>
      <div className="hero-movie">
        <Swiper navigation={true} thumbs={{ swiper: thumbsSwiper }} lazy={true}>
          {movieList &&
            movieList.map(i => (
              <SwiperSlide key={i.id} className={"text-center"}>
                <img
                  src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`}
                  alt={i.title}
                  className={"backdrop swiper-lazy"}
                  width={"100%"}
                />
                <Link to={`/movie/${i.id}`} onClick={() => setCurrentMovie(type, i.id)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
                    alt={i.title}
                    className={"poster swiper-lazy"}
                    width={"100%"}
                  />
                </Link>
                <h1 className={"movie-title"}>{i.name ? i.name : i.original_title}</h1>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="movie-list">
        <Swiper
          onSwiper={setThumbsSwiper}
          pagination={{
            type: "progressbar",
          }}
          lazy={true}
          mousewheel={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode
          direction={"vertical"}>
          {movieList &&
            movieList.map((i, ind) => (
              <SwiperSlide key={i.id} className={"movie-wrapper"}>
                <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} alt={i.title} className="swiper-lazy" width={500} />
                <div className="movie-info">
                  <p>{i.name ? i.name : i.original_title}</p>
                  <div className={"flex justify-between w-full"}>
                    <span>{moment(i.release_date).format("YYYY")}</span>
                    <span className={"flex items-center"}>
                      <TiStarFullOutline fill={"#f1c40f"} size={14} />
                      &nbsp;
                      {i.vote_average}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default connect(
  ({ app }) => ({ movieList: app.movieList, category: app.category, type: app.type, currentMovie: app.currentMovie }),
  { getMovieList, setCurrentMovie }
)(HeroSlide);
