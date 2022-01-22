import React from "react";
import ProductCart from "./ProductCart";
import style from "./ProductConatiner.module.css";

const ProductContainer = (props) => {
  const { data } = props;

  return (
    <div className={style.itemsContainer}>
      <div className={style.productCards}>
        {data.map((productinfo, index) => {
          return <ProductCart data={productinfo} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductContainer;
