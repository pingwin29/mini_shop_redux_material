import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";
import Button from "../reuseable/Button";
import style from "./Detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Detail = (props) => {
  const specialProductInfo = props.specialProductInfo;
  const ctx = useContext(context);
  const { productName, productId } = useParams();
  const refer = useRef();
  const AddtoCart = () => {
    const data = {
      cat: productName,
      productId: Number(productId),
      price: specialProductInfo[0].price,
      qty: Number(refer.current.value),
    };
    ctx.addToCart(data);
  };
  return (
    <div className={style.viewItemDetail}>
      <span className={style.viewItemtitle}>{specialProductInfo[0].title}</span>
      <span className={style.viewItemprice}>
        PRICE : <span id="viewItemprice">{specialProductInfo[0].price}</span>
      </span>
      <h4>DETAIL</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        fugiat voluptas! Similique ipsa nostrum quasi odit cum voluptate nisi
        repellat nesciunt placeat laudantium, accusamus unde voluptates
        consectetur at vel nam vero earum ea cupiditate! Illo, quaerat? Eveniet
        quia cumque reiciendis?
      </p>
      <div className={style.inputField}>
        <label htmlFor="qulity" className={style.viewItemQulityLabel}>
          Qulity
        </label>
        <input
          ref={refer}
          name="delivery"
          type="number"
          className={style.viewItemInput}
          placeholder="Enter Qulity"
          id="qty"
          defaultValue={1}
        />
      </div>
      <Button
        style={{
          marginTop: "40px",
          background: "rgba(114, 82, 243, 0.8)",
          color: "#fff",
        }}
        onclick={AddtoCart}
      >
        <FontAwesomeIcon icon={faCartPlus} />
        &nbsp;&nbsp;Add To Cart
      </Button>
    </div>
  );
};

export default Detail;
