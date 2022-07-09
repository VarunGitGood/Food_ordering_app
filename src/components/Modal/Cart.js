import React, {  useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { ModalFoodHolder } from "../Holders/ModalFoodHolder";
import s from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";





export const Cart = (props) => {

  
  const modalctx = useContext(CartContext)



  


  const clickHandler = (e) => {
    window.alert("Order has been placed!!");
    modalctx.destroyCart()
    props.onClose({ showModal: false });
  };

  const cancelHandler = (e) => {
    props.onClose({ showModal: false });
  };

  return (
    <div className={s.back} >
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.summary}>Item Summary</span>
          <button onClick={cancelHandler} className={s.btn}>X</button>
        </div>
        <div className={s.main}>{modalctx.list.map(item => {
          return <ModalFoodHolder key={item.id} data={item}/>
        })}</div>
        <div className={s.bottom}>
          <span>Total Amount: {modalctx.totalAmount} <FontAwesomeIcon icon={faIndianRupee}/></span>
          <button onClick={clickHandler} className={s.btn}>Order Up</button>
        </div>
      </div>
    </div>
  );
};
