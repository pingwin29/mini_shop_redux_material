import React from "react";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";
import style from "./Nav.module.css";
import LinkNav from "./LinkNav";
const Nav = () => {
  let { data } = useContext(context);
  const cats = data.map((e) => e.cat);
  const cat = Array.from(new Set(cats));

  return (
    <div className={style.tagContainer}>
      {cat.map((e, index) => (
        <LinkNav name={e} key={index} className={style.tag} />
      ))}
    </div>
  );
};

export default Nav;
