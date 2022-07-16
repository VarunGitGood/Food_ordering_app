import React, { useEffect } from "react";
import s from "./OrderModal.module.css";
import { app, db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import OrderFoodHolder from "../Holders/OrderFoodHolder.js";
import { useState } from "react";

function OrderModal(props) {

  const a = window.localStorage.getItem("uid")
  const dbInstance = collection(db, "User" , a , "orderData");


  let  [items,setitems] = useState([]);


  async function getData() {
    try {
        const data = await getDocs(dbInstance);
        const newData = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))) 
    
    newData.forEach((item) => {
      let name = item.foodData.map((e) => {
        return e.name;
      });
      let quantity = item.foodData.map((e) => {
        return e.quantity;
      });
      let totalAmount = item.totalAmount
      let time = item.time
      setitems(prev => ([...prev, {
        name: name,
        quantity: quantity,
        totalAmount:totalAmount,
        time:time,
        id: item.id
      }]))
    });
    }
    catch (err) {
        alert(err.message)
    }
}


  

  useEffect(() => {
    getData()
  },[]);

  return (
    <div className={s.back}>
      <div className={s.container}>
        <div className={s.header}>
          <h3>My Orders</h3>
          <button
            className={s.btn}
            onClick={(e) => {
              props.onClose();
            }}
          >
            X
          </button>
        </div>
        <div className={s.main}>{items.map(item => {
            return <OrderFoodHolder  key={item.id} fdata={item}/>
        })}</div>
      </div>
    </div>
  );
}

export default OrderModal;
