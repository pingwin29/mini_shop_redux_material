import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import RelatedItem from "../components/relatedItem/RelatedItem";
import Review from "../components/review/Review";
import Shoppingcircle from "../components/shoppingCart/Shoppingcircle";
import ViewDetail from "../components/viewdetail/ViewDetail";
import context from "../store/context";

const ProductDetail = () => {
  const { productName, productId } = useParams();
  let nav = useNavigate();
  let style = {
    padding: "10px 20px",
    outline: "none",
    border: "none",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    marginBottom: "40px",
  };
  let container = {
    width: "95%",
    margin: "20px auto 0 auto",
    paddingBottom: "50px",
  };
  const Back = () => {
    nav(`/${productName}`);
  };

  document.documentElement.scrollTop = 0;

  return (
    <div style={container}>
      <button style={style} onClick={Back}>
        Back
      </button>
      <ViewDetail />
      <Review />
      <RelatedItem />
      <Shoppingcircle />
    </div>
  );
};

export default ProductDetail;
