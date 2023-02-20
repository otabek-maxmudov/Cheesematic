import { Tabs } from "antd";
import { setCategory, setType } from "../tools/redux/Actions/Actions";
import { AllMovies, SearchInput } from "./index";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";

import "../styles/content.css";

const Content = () => {
  const { category, view_all } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const items = [
    { key: "movie", label: "Movies" },
    { key: "tv", label: "Tv Shows" },
  ];

  const onChange = active_key => {
    dispatch(setType(active_key === "tv" ? "airing_today" : "upcoming"));
    dispatch(setCategory(active_key));
  };

  return (
    <div className="col-span-4 flex flex-col">
      <div className="grid grid-cols-3 h-14 overflow-hidden">
        <SearchInput />

        <div className="col-span-1 col-start-3 h-14 flex justify-end items-center">
          <Tabs defaultActiveKey={category} items={items} onChange={onChange} />
        </div>
      </div>

      {view_all ? <AllMovies /> : <Movie />}
    </div>
  );
};

export { Content };
