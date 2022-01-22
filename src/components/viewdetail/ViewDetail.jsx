import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";
import Detail from "./Detail";
import ProductDetail from "./Detail";
import style from "./ViewDetail.module.css";

const ViewDetail = (props) => {
  const { productId, productName } = useParams();
  const { data } = useContext(context);
  const specialProductInfo = data.filter((e) => e.id == productId);
  return (
    <div id={style.viewItemDetailContainer}>
      <div className={style.viewItemDetailImg}>
        <img
          src={`../../../${specialProductInfo[0].img}`}
          alt={`${specialProductInfo[0].title} img`}
        />
      </div>
      <Detail specialProductInfo={specialProductInfo} />
    </div>
  );
};

export default ViewDetail;
