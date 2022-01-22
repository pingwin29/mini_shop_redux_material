import React from "react";
import style from "./ResultListContainer.module.css";
import ResultList from "./ResultList";

const ResultListContainer = (props) => {
  const { data } = props;
  return (
    <div className={style.resultListContainer}>
      {data.map((e) => {
        return <ResultList data={e} key={e.id} />;
      })}
    </div>
  );
};

export default ResultListContainer;
