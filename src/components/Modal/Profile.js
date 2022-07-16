import React, { useState,useEffect } from 'react'
import s from "./Profile.module.css"
import {app , db} from '../../firebaseConfig'
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";







function Profile(props) {

    const [dataa ,setdataa] = useState(null)
    const a = window.localStorage.getItem("uid")
    const dbInstance = collection(db , "User" , a , "UserData")
    
    async function getData() {
        try {
            const data = await getDocs(dbInstance);
            setdataa((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        }
        catch (err) {
            alert(err.message)
        }
    }
    
  
      
    
      useEffect(() => {
        getData()
        
      },[]);
      console.log(dataa);

// <div className={s.header}>photo and signed in as</div>
//             <div className={s.main}>
//                 <span>{dataa.name}</span>
//                 <span>{dataa.phone}</span>
//                 <span>{dataa.address}</span>
//             </div>
//             <div className={s.footer}><button>Update Profile</button></div>



  return (
    <div className={s.back}>
        <div className={s.container}>
            
        </div>
    </div>
  )
}

export default Profile