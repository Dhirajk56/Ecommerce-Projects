import React from "react";
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";
const LinkWithIcon = ({ title, links, emoji, sidebar }) => {
  return (
    <NavLink
      to={links}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} <img src={emoji} alt="" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
