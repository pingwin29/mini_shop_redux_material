import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";
import ProductCart from "../productContainer/ProductCart";
import style from "./RelatedItem.module.css";
import Carousel from "react-elastic-carousel";

const RelatedItem = () => {
  const { productName, productId } = useParams();
  const { data } = useContext(context);

  const itemData = data.filter((e) => {
    return e.cat == productName;
  });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div id="relatedItem">
      <div className="container">
        <h3>Related Products</h3>
        <div id={style.relatedItemsContainer}>
          <Carousel breakPoints={breakPoints} showArrows={false}>
            {itemData.map((productInfo, index) => {
              if (productInfo.id != Number(productId)) {
                return <ProductCart data={productInfo} key={index} />;
              }
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RelatedItem;
