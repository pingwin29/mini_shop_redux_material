import React from "react";
import SearchBox from "../searchBox/SearchBox";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.container}>
      <Link
        to={`/`}
        style={{ display: "flex", alignItems: "center" }}
        className={style.h1}
      >
        <img
          src={window.location.origin + "/img/19119921051553508682-128.png"}
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          alt=""
        />{" "}
        <span>Mini</span>&nbsp;Shop
      </Link>
      <SearchBox />
    </div>
  );
};

export default Header;
