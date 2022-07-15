import React, { useEffect,useContext } from 'react'
import s from './OrderModal.module.css'
import {app , db} from '../../firebaseConfig'
import { collection , getDocs } from "firebase/firestore";
import { CartContext } from '../../context/cart-context';
import { async } from '@firebase/util';



function OrderModal(props) {

    const dbInstance = collection(db, "data")

    async function getData() {
        const data = await getDocs(dbInstance)
        const newData = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        
    }
   
    useEffect(()=> {
        getData()
    },[])


  return (
    <div className={s.back}>
        <div className={s.container}>
            <div className={s.header}><h3>My Orders</h3><button className={s.btn} onClick={e => {props.onClose()}}>X</button></div>
            <div className={s.main}>{}</div>
        </div>
    </div>
  )
}

export default OrderModal