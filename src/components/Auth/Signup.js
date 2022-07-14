import React, { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig";
import s from './auth.module.css'
function Signup(props) {
  const emailRef = useRef();
  const passRef = useRef();
  const gauth = getAuth();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        gauth,
        emailRef.current.value,
        passRef.current.value
      );
      alert("account created");
      emailRef.current.value = "";
      passRef.current.value = "";
      props.onCret()
    } catch (err) {
      alert(err.message.slice(22,35))
    }
  }

  return (
    <div className={s.back}>
      <div className={s.nav}>
        <div className={s.title}>OJAS</div>
      </div>
      <form onSubmit={submitHandler} className={s.form}>
        <div className={s.holder}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter College Email"
            ref={emailRef}
          />
        </div>
        <div className={s.holder}>
          <label>Password</label>
          <input type="password" placeholder="Enter Password" ref={passRef} />
        </div>
        <div className={s.holder}>Sign Up now</div>
        <div className={s.control}>
          <button type="submit" className={s.btnl}>Sign Up</button>
          <button
            onClick={(e) => {
              props.onCret();
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
