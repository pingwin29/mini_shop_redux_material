import React from "react";
import style from "./CustomerReviewContainer.module.css";

const CustomerReview = () => {
  return (
    <div className={style.review}>
      <div className={style.reviewHeader}>
        <img
          src={window.location.origin + "/img/team/team-1.jpg"}
          alt=""
          width={35}
          height={35}
          className={style.customerImg}
        />
        <div className={style.customerName}>
          <h4>Nina Holloway</h4>
          <span>30 Nov 2021</span>
        </div>
        <div className={style.rating}>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half" aria-hidden="true" />
        </div>
        <div className={style.comments}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          facilis error sint adipisci eaque et, doloremque eos a autem quasi
          amet reiciendis saepe aspernatur? Voluptatibus, omnis amet. Quos,
          optio eius!
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
