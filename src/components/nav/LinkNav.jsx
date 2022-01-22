import React from "react";
import { NavLink } from "react-router-dom";

const LinkNav = (props) => {
  return (
    <NavLink
      to={`/${props.name}`}
      className={`${props.className}`}
      style={({ isActive }) => {
        return {
          color: isActive && "#fff",
          background: isActive && " rgba(114, 82, 243, 0.9)",
          boxShadow: isActive && "10px 13px 29px -10px rgba(114, 82, 243, 0.9)",
        };
      }}
    >
      {props.name}
    </NavLink>
  );
};

export default LinkNav;
