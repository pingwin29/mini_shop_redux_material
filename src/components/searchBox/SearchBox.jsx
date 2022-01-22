import React, { useRef, useState } from "react";
import style from "./SearchBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import ResultListContainer from "./ResultListContainer";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";

const SearchBox = () => {
  const [search, setSearch] = useState(false);
  const [result, setResult] = useState([]);
  const [mobile, setMobile] = useState(false);
  const { data } = useContext(context);
  const usf = useRef();
  const con = useRef();

  const onChangeHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();

    if (inputValue.trim().length === 0) {
      setSearch(false);
      return setResult([]);
    }

    const resultItem = [];
    // data.map((item) => {
    //   item.title.toLowerCase().includes(inputValue) && resultItem.push(item);
    // });
    data.map(
      (item) =>
        item.title.toLowerCase().includes(inputValue) && resultItem.push(item)
    );

    if (resultItem.length > 0) {
      setResult(resultItem);
      return setSearch(true);
    } else {
      return setSearch(false);
    }
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      setSearch(false);
      usf.current.value = "";
      if (window.innerWidth < 520) {
        con.current.style.width = "35px";
      }
      setMobile(false);
    }, 200);
  };

  const clickSearchHandler = () => {
    if (window.innerWidth < 520) {
      if (con.current.style.width === "35px") {
        con.current.style.width = "90%";
        setMobile(true);
      } else {
        con.current.style.width = "35px";
        setMobile(false);
      }
    }
  };

  return (
    <div className={style.searchBox} onBlur={onBlurHandler} ref={con}>
      <input
        type="text"
        name=""
        ref={usf}
        placeholder="Search Product"
        className={style.searchInput}
        onChange={onChangeHandler}
        id=""
      />
      <div className={style.searchIcon}>
        {!mobile && (
          <FontAwesomeIcon onClick={clickSearchHandler} icon={faSearch} />
        )}
        {mobile && (
          <FontAwesomeIcon onClick={clickSearchHandler} icon={faTimes} />
        )}
      </div>

      {search && <ResultListContainer data={result} />}
    </div>
  );
};

export default SearchBox;
