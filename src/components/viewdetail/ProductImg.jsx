import React from "react";

const ProductImg = (props) => {
  const { specialProductInfo } = props;
  return (
    <div className={props.className}>
      <img
        src={`${specialProductInfo[0].img}`}
        alt={`${specialProductInfo[0].title} img`}
      />
    </div>
  );
};

export default ProductImg;
