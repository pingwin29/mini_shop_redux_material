import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./ProductCart.module.css";

const ProductCart = (props) => {
  const productInfo = props.data;
  const { productName } = useParams();
  let nag = useNavigate();
  const viewDetail = () => {
    nag(`/${productName}/detail/${productInfo.id}`);
  };
  return (
    <div className={style.ProductCard}>
      <div className={style.overlay}>
        <div className={style.itemDetail}>
          <div className={style.itemName}>
            {productInfo.title.substring(0, 20)}
          </div>
          <div className={style.itemchord}>{productInfo.detail}</div>
          <div className={style.itemPrice}>{productInfo.price}</div>
          <div className={style.itemButtons}>
            <button
              className={`${style.btn} ${style.buybtn}`}
              onClick={viewDetail}
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
      <img
        src={`${window.location.origin}/${productInfo.img}`}
        alt={`${productInfo.title} img`}
      />
    </div>
  );
};

export default ProductCart;
