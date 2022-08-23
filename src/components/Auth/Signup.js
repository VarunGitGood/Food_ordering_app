import React, { useContext, useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig";
import s from "./Signup.module.css";
// import CartProvider from "../../context/CartProvider";
import { CartContext } from "../../context/cart-context";
import vid from "./login.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
function Signup(props) {
  const emailRef = useRef();
  const passRef = useRef();
  const passCRef = useRef();
  const gauth = getAuth();
  const ctx = useContext(CartContext);
  async function submitHandler(e) {
    e.preventDefault();
    if(passCRef.current.value != passRef.current.value)
    {
      alert("Passwords Don't Match")
      return;
    }
    try {
      let a = await createUserWithEmailAndPassword(
        gauth,
        emailRef.current.value,
        passRef.current.value
      );
      console.log(a);
      alert("account created");
      emailRef.current.value = "";
      passRef.current.value = "";
      window.localStorage.setItem("uid", a.user.uid);
      window.localStorage.setItem("isloggedin", true);
      ctx.isLoggedIn(true);
    } catch (err) {
      alert(err.message.slice(22, 35));
    }
  }

  return (
    <>
      <div className={s.back}>
        <div className={s.nav}>
          <div className={s.title}>OJAS</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.vid}>
            <video autoPlay loop muted className={s.video}>
              <source src={vid} type="video/mp4" />
            </video>
          </div>
          <form className={s.form} onSubmit={submitHandler}>
          <span className={s.tit}>Sign Up</span>
          <div className={s.email}>
              <span className={s.icon}>
              <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="email"
                placeholder="Enter College Email"
                ref={emailRef}
                required
                // className={s.email__input}
              />
            </div>
            <div className={s.pass}>
              <span className={s.icon}>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                ref={passRef}
                required
                // className={s.pass__input}
              />
            </div>
              <div className={s.pass}>
              <span className={s.icon}>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                placeholder="Confirm Password"
                ref={passCRef}
                required
                // className={s.pass__input}
              />
            </div>
            <button class={s.login__submit} type="submit">
              <span class="button__text">Sign Up</span>
            </button>
            <div className={s.signup_arrow}>Already have an account?</div>
            <div className={s.scam}>
            <button
                className={s.btn}
                onClick={(e) => {
                  props.onCret();
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size="2x"
                  className={s.icon}
                />
              </button>
              <h2>Click here to Log In</h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Signup;
