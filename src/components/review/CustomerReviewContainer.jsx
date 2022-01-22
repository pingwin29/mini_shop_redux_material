import React from "react";
import CustomerReview from "./CustomerReview";
import style from "./CustomerReviewContainer.module.css";

const CustomerReviewContainer = () => {
  return (
    <div id={style.reviewContainer}>
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
    </div>
  );
};

export default CustomerReviewContainer;
