import { Button, ConfigProvider, Input } from "antd";
import { useRef } from "react";
import { MdOutlineClear, MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import "../styles/search-input.css";
import { getSearchedMovie } from "../tools/redux/Actions/Actions";

const SearchInput = () => {
  const { category } = useSelector(({ data }) => data);
  const dispatch = useDispatch();
  const timeoutId = useRef();
  // const genres = genres_list.map(({ id: value, name: label, ...rest }) => ({
  //   value,
  //   label,
  //   ...rest,
  // }));

  const onSearch = el => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      dispatch(getSearchedMovie(category, el.target.value));
    }, 500);
  };
  // const selectingGenre = value => console.log(value);

  // const searchByCategory = (
  //   <Select
  //     defaultValue="All Genres"
  //     onChange={selectingGenre}
  //     bordered={false}
  //     options={genres}
  //     suffixIcon={<TiArrowSortedDown />}
  //     rootClassName="genres-select"
  //     popupClassName="genres-select-popup"
  //   />
  // );

  const searchButton = (
    <Button
      type="dashed"
      name="search_button"
      icon={<MdOutlineSearch className="bg-transparent text-yellow-main text-xl" />}
    />
  );

  return (
    <div className="col-span-1">
      <ConfigProvider
        theme={{
          token: {
            colorTextPlaceholder: "#9FA9C6",
          },
        }}>
        <Input
          onChange={onSearch}
          placeholder="Search"
          // addonBefore={searchByCategory}
          addonAfter={searchButton}
          bordered={false}
          allowClear={{ clearIcon: <MdOutlineClear /> }}
        />
      </ConfigProvider>
    </div>
  );
};

export { SearchInput };
