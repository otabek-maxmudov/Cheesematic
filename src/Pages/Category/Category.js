import React from "react";
import { connect } from "react-redux";
import { Menu } from "antd";
import { setCategory } from "../../Redux/Actions/Actions";

// styles
import { MdTrendingUp, MdAirplay } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { RiVipCrown2Fill } from "react-icons/ri";
import "./Category.css";

const Category = ({ setCategory, category, type }) => {
  const sections = [
    type == "movie"
      ? { key: "upcoming", title: "Upcoming", icon: <MdTrendingUp /> }
      : { key: "airing_today", title: "Airing today", icon: <MdAirplay /> },
    { key: "top_rated", title: "Top Rated", icon: <AiFillFire /> },
    { key: "popular", title: "Most Popular", icon: <RiVipCrown2Fill /> },
  ];

  const handleClick = e => setCategory(e.key);

  return (
    <div className={"category"}>
      <Menu onClick={handleClick} selectedKeys={[category]}>
        {sections.map(m => (
          <Menu.Item icon={m.icon} key={m.key}>
            {m.title}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default connect(({ app }) => ({ category: app.category, type: app.type }), { setCategory })(Category);
