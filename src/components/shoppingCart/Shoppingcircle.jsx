import React from "react";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";
import style from "./Shoppingcircle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Shoppingcircle = () => {
  const ctx = useContext(context);
  const { cart } = ctx;
  let nav = useNavigate();
  const onclickHandler = () => {
    nav("/cart");
  };
  return (
    <div className={style.circel} onClick={onclickHandler}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={style.noOfItem}>{cart.length}</span>
    </div>
  );
};

export default Shoppingcircle;
