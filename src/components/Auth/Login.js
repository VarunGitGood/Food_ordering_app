import React, { useContext, useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../../firebaseConfig";
import vid from "./vid.mp4";
import CartProvider from "../../context/CartProvider";
import { CartContext } from "../../context/cart-context";
import s from "./Login.module.css";
import { addDoc, collection, getDoc, setDoc, doc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
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
        <div className={s.wrapper}>
          <form className={s.form} onSubmit={submitHandler}>
            <span className={s.tit}>Login</span>
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
            <button class={s.login__submit} type="submit">
              <span class="button__text">Log In Now</span>
            </button>
            <div className={s.signup_arrow}>Don't have an account?</div>
            <div className={s.scam}>
              <h2>Form One Right Now</h2>
              <button
                className={s.btn}
                onClick={(e) => {
                  props.onCreate();
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="2x"
                  className={s.icon}
                />
              </button>
            </div>
          </form>
          <div className={s.vid}>
            <video autoPlay loop muted className={s.video}>
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}
export default Login;
