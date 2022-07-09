import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import s from "./ModalFoodHolder.module.css";
export const ModalFoodHolder = ({ data }) => {
 

  const ctx = useContext(CartContext)
  const addHandler = e => {
    ctx.addItem({
      name: data.name,
      cost: data.cost,
      id: data.id,
      quantity: 1
    })
  }

  const removeHandler = e => {
    ctx.removeItem({
      cost:data.cost,
      id: data.id,
      quantity: 1
    })
  }

  return (
    <div className={s.container}>
      <div className={s.detail}>
        <span>{data.name}</span>
        <span>x {data.quantity}</span>
      </div>
      <div className={s.control}>
        <button className={s.btn} onClick={removeHandler}>-</button>
        <button className={s.btn} onClick={addHandler}>+</button>
      </div>
    </div>
  );
};
