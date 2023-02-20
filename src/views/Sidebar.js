import logo from "../chlogo.svg";
import { Menu } from "antd";
import { HiTrendingUp } from "react-icons/hi";
import { RiVipCrownFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { MdAirplay } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../tools/redux/Actions/Actions";
import { memo } from "react";

import "../styles/sidebar.css";

const Sidebar = memo(() => {
  const { type, category } = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const items = [
    category === "movie"
      ? { key: "upcoming", label: "Upcoming", icon: <HiTrendingUp /> }
      : { key: "airing_today", label: "Airing Today", icon: <MdAirplay /> },
    { key: "top_rated", label: "Top Rated", icon: <FaStar /> },
    { key: "popular", label: "Most Popular", icon: <RiVipCrownFill /> },
  ];

  return (
    <div className="col-span-1 flex flex-col">
      <div className="w-full h-16 flex">
        <img src={logo} alt="logo" width={42} height={34} className="w-11 mb-6" />
        <span className="text-yellow-main text-4xl font-['Wendy_One'] hover:cursor-default select-none ">
          heesematic
        </span>
      </div>

      <div className="sidebar">
        <Menu
          selectedKeys={[type]}
          onSelect={item => dispatch(setType(item.key))}
          mode={"vertical"}
          items={items}
          className="bg-transparent pt-6 pl-4"
        />
      </div>
    </div>
  );
});

export { Sidebar };
