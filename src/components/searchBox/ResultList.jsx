import React from "react";
import { Link } from "react-router-dom";
import style from "./ResultListContainer.module.css";

const ResultList = (props) => {
  const { data } = props;
  const container = {
    padding: "5px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
  };
  const name = {
    width: "70%",
    textDecoration: "none",
    color: "black",
  };
  const img = {
    width: "50px",
    height: "50px",
  };
  return (
    <Link
      to={`/${data.cat}/detail/${data.id}`}
      style={container}
      className={style.hover}
    >
      <img src={window.location.origin + `/${data.img}`} alt="" style={img} />
      <p style={name}>{data.title}</p>
    </Link>
  );
};

export default ResultList;
