import React, { useContext, useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../../firebaseConfig";
import CartProvider from "../../context/CartProvider";
import { CartContext } from "../../context/cart-context";
import s from "./auth.module.css";
import { addDoc, collection, getDoc, setDoc, doc } from "firebase/firestore";
function Login(props) {
  const emailRef = useRef();
  const passRef = useRef();
  const gauth = getAuth();

  const ctx = useContext(CartContext);
  async function submitHandler(e) {
    e.preventDefault();
    try {
      let a = await signInWithEmailAndPassword(
        gauth,
        emailRef.current.value,
        passRef.current.value
      );

      const ref = doc(db, "User", a.user.uid, "UserData", "profile");
      const data = {
        email: emailRef.current.value,
        uid: a.user.uid,
      };
      await setDoc(ref, data, { merge: true });
      window.localStorage.setItem("isloggedin", true);
      window.localStorage.setItem("uid", a.user.uid);
      window.localStorage.setItem("isloggedin", true);

      ctx.isLoggedIn(true);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <CartProvider>
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
              required
            />
          </div>
          <div className={s.holder}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              ref={passRef}
              required
            />
          </div>
          <div className={s.holder}>Good Food Can't Wait</div>
          <div className={s.control}>
            <button type="submit" className={s.btnl}>
              Login
            </button>
            <button
              onClick={(e) => {
                props.onCreate();
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </CartProvider>
  );
}

export default Login;
