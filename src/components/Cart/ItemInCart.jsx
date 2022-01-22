import React from "react";
import { useContext } from "react/cjs/react.development";
import context from "../../store/context";
import style from "./CartTable.module.css";
const ItemInCart = (props) => {
  const { item, qty } = props.data;
  const { title, img, price, cat, id } = item;
  const { addToCart, Cancel, total } = useContext(context);
  const sub = () => {
    const deliveryData = {
      cat: cat,
      productId: Number(id),
      qty: -1,
      price: price,
    };
    addToCart(deliveryData);
  };
  const plus = () => {
    const deliveryData = {
      cat: cat,
      productId: Number(id),
      qty: 1,
      price: price,
    };
    addToCart(deliveryData);
  };
  const cancel = () => {
    const deliveryData = {
      id: id,
      price: price * qty,
    };
    Cancel(deliveryData);
  };

  return (
    <tr className={style.shoppingItem}>
      <td className={style.shoppingItemInfo}>
        <img
          src={window.location.origin + `/${img}`}
          width={70}
          height={70}
          alt="${CartItemDetail.title} Image"
        />
        <h3 className={style.shoppingItemName}>{title}</h3>
      </td>
      <td>
        <div className={style.shoppingItemQty}>
          <span onClick={sub}>-</span>
          <input type="number" readOnly value={qty} />
          <span onClick={plus}>+</span>
        </div>
      </td>
      <td className={style.shoppingItemPrice}>
        <span>{parseFloat(price * qty).toFixed(2)}</span>
      </td>
      <td>
        <div className={style.cross} onClick={cancel}>
          X
        </div>
      </td>
    </tr>
  );
};

export default ItemInCart;
