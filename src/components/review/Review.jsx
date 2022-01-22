import React from "react";
import Button from "../reuseable/Button";
import CustomerReviewContainer from "./CustomerReviewContainer";
import style from "./Review.module.css";
import ReviewInput from "./ReviewInput";

const Review = () => {
  return (
    <div id={style.reviewItem}>
      <div className={style.container}>
        <h3>Review and Rating</h3>
        <CustomerReviewContainer />
        <ReviewInput />
      </div>
    </div>
  );
};

export default Review;
