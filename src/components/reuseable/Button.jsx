import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${style.btn}`}
      style={props.style}
      id="addCart"
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;
