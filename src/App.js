import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "./tools/redux/Actions/Actions";
import MainView from "./views/MainView";
import { SelectedMovie } from "./views";

import "./styles/main.css";

function App({ location }) {
  const { type, category } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList(category, type));
  }, [category, dispatch, type]);

  return (
    <BrowserRouter>
      <Routes path="*" location={location}>
        <Route index element={<MainView />} />
        <Route path={`/${category}/:id`} element={<SelectedMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
