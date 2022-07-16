import React from "react";
import s from "./OrderFoodHolder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faPlus } from "@fortawesome/free-solid-svg-icons";
function OrderFoodHolder(props) {

  let array = []
  for (let i = 0; i < props.fdata.name.length; i++) {
    array[i] = `${props.fdata.name[i]} x ${props.fdata.quantity[i]}`
  }
  console.log(array);

  return (
    <div className={s.container}>
      <div className={s.items}>
        <div className={s.data}>{array.map(e => {return `${e}\n`})}</div>
      </div>
      <div className={s.info}>
        <div>{props.fdata.time.slice(0,16)}</div>
        <div><h5>{props.fdata.time.slice(16,25)}</h5></div>
        <div className={s.tot}><FontAwesomeIcon icon={faIndianRupee}/> {props.fdata.totalAmount}</div>
      </div>
    </div>
  );
}

export default OrderFoodHolder;
