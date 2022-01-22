import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import ProductContainer from "../components/productContainer/ProductContainer";
import context from "../store/context";

const Product = () => {
  const param = useParams();
  const { data } = useContext(context);
  const products = data.filter((e) => e.cat == param.productName);

  return <ProductContainer data={products} />;
};

export default Product;
