import React from "react";
import style from "./ReviewInput.module.css";
import Button from "../reuseable/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ReviewInput = () => {
  const btn = {
    display: "block",
    margin: "10px auto",
    color: "#fff",
    background: "rgba(114, 82, 243, 0.8)",
    width: "100%",
  };
  return (
    <div className={style.reviewInput}>
      {/* <label htmlFor="textArea">Write Review</label> */}
      <textarea
        cols={30}
        rows={10}
        placeholder="Enter Your Review"
        defaultValue={""}
      />
      <Button style={btn}>
        <FontAwesomeIcon icon={faPaperPlane} /> &nbsp; Post
      </Button>
    </div>
  );
};

export default ReviewInput;
