import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
import { Spin } from "antd";
import { noInternet } from "../Redux/Actions/Actions";

// Style
import noInternetGif from "../Images/noInternet.gif";
import { ImSpinner2 } from "react-icons/im";
import "./MainPage.css";

// Components
const Category = React.lazy(() => import("./Category/Category"));
const HeaderComp = React.lazy(() => import("./Header/Header"));
const HeroSlide = React.lazy(() => import("./Hero/HeroSlide"));
const SingleMovie = React.lazy(() => import("./SingleMovie/SingleMovie"));

function MainPage({ loading, location }) {
  const movie = JSON.parse(localStorage.getItem("movie"));

  if (!noInternet) {
    return (
      <Spin spinning={loading} indicator={<ImSpinner2 />} tip={"Loading..."}>
        <Suspense fallback={<div className={"h-screen"}></div>}>
          <Switch location={location}>
            <Route exact path={"/"}>
              <div className={"main"}>
                <HeaderComp />
                <Category />
                <HeroSlide />
              </div>
            </Route>
            <Route exact path={`/movie/${movie?.id}`}>
              <div className={"movie"}>
                <SingleMovie />
              </div>
            </Route>
          </Switch>
        </Suspense>
      </Spin>
    );
  } else {
    return (
      <div className={"h-screen bg-black"}>
        <img src={noInternetGif} alt="no internet" className={"mx-auto"} />
      </div>
    );
  }
}

export default connect(({ app }) => ({ currentMovie: app.currentMovie, loading: app.loading }))(MainPage);
