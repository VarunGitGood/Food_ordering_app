import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart-context";
import s from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export const CartButton = (props) => {
  const [amt, setamt] = useState(0);
  const clickHandler = (e) => {
    props.onPress({ showModal: true });
  };

  const ctx = useContext(CartContext);

  let tot = 0;
  useEffect(() => {
    for (let a of ctx.list) {
      tot = tot + a.quantity;
    }
    setamt(tot);
  }, [ctx.list]);

  return (
    <button onClick={clickHandler} className={s.btn}>
      <span><FontAwesomeIcon icon={faShoppingCart} /> Items : {amt}</span>
    </button>
  );
};
