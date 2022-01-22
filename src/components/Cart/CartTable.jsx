import React from "react";
import { useContext } from "react/cjs/react.development";
import Button from "../reuseable/Button";
import style from "./CartTable.module.css";
import ItemInCart from "./ItemInCart";
import context from "../../store/context";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
  let { cart, data, total } = useContext(context);
  const items = [];
  const nav = useNavigate();
  cart.map((e) => {
    data.map((w) => {
      w.id == e.productId && items.push({ item: w, qty: e.qty });
    });
  });

  const id = 0;
  const back = () => {
    nav(-1);
  };

  return (
    <table className={style.cartItemTable}>
      <tbody border="1">
        <tr>
          <th>Products</th>
          <th>Qty</th>
          <th>Price</th>
          <th></th>
        </tr>

        {items.length === 0 && (
          <tr>
            <td colSpan={4} style={{ textAlign: "center" }}>
              Nothing To Show
            </td>
          </tr>
        )}
        {items.length > 0 &&
          items.map((e, index) => {
            return <ItemInCart data={e} key={index} />;
          })}

        <tr className={style.total}>
          <td colSpan={2} className={style.totalspan}>
            <span>Total Amount</span>
          </td>
          <td className={style.totalAmount} id={style.totalAmount} colSpan={2}>
            $ {total.toFixed(2)}
          </td>
        </tr>

        <tr className={style.cartBtn}>
          <td colSpan={2}>
            <Button onclick={back} style={{ cursor: "pointer" }}>
              &larr; Continue Shopping
            </Button>
          </td>
          <td colSpan={2}>
            <Button style={{ background: "rgba(0, 0, 0, 0.8)", color: "#fff" }}>
              CheckOut
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
