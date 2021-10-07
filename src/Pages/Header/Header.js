import { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieList, noInternet, setCategory, setSearching, setType } from "../../Redux/Actions/Actions";
import { Menu } from "antd";

// styles
import { RiSearchLine } from "react-icons/ri";
import logo from "../../Images/logo.png";
import "./Header.css";

function Header({ setType, type, getMovieList, category, setCategory, setSearching, movieList }) {
  const types = [
    { key: "movie", title: "Movies", request: "/movie" },
    { key: "tv", title: "Tv Shows", request: "/tv" },
  ];

  useEffect(() => {
    getMovieList(`/${type}/${category}`);
  }, [type, category]);

  const handleClick = e => {
    setType(e.keyPath[0]);
    type == "tv" ? setCategory("upcoming") : setCategory("airing_today");
  };

  const searchMovie = e => {
    setSearching(`/search/${type}`, e.target.value);
  };

  return (
    <>
      <div className={"logo"}>
        <img src={logo} alt="logo" />
      </div>

      <form onKeyUp={searchMovie} className={"search-input_wrapper"}>
        <input className={"search-input"} placeholder="Search" />
        <RiSearchLine className={"align-middle"} fill={"#FAE799"} size={15} />
        {noInternet && <span className={"text-white absolute -right-32"}>Movie not found</span>}
      </form>

      <div className="types">
        <Menu onClick={handleClick} selectedKeys={[type]} mode="horizontal">
          {types.map(i => (
            <Menu.Item key={i.key}>{i.title}</Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  );
}

export default connect(({ app }) => ({ type: app.type, category: app.category, movieList: app.movieList }), {
  setType,
  getMovieList,
  setCategory,
  setSearching,
})(Header);
