import React, { useContext, useState } from "react";
import { CartButton } from "./CartButton";
import s from "./NavBar.module.css";
import Drawer from "react-modern-drawer";
import d from "./Drawer.module.css";
import "react-modern-drawer/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/cart-context";
import OrderModal from "../Modal/OrderModal";

export const NavBar = (props) => {
  const ctx = useContext(CartContext);
  const [drawer, setdrawer] = useState(false);
  const [order , setorder ] = useState(false)
  const pressHandler = (e) => {
    props.onModal(e);
  };

  const clickhandler = (e) => {
    setdrawer((prev) => !prev);
  };
  const logouthandler = (e) => {
    ctx.isLoggedIn(false);
    window.localStorage.removeItem("isloggedin");
  };

  const orderHandler = () => {
    setdrawer((prev) => !prev);
    setorder(prev => !prev)
  }

  return (
    <>
      {order && <OrderModal onClose={e => {setorder(prev => !prev)}}/>}
      <div className={s.nav}>
        <div className={s.title}>OJAS</div>
        <div className={s.hold}>
          <CartButton onPress={pressHandler}></CartButton>
          <button className={s.profile} onClick={clickhandler}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
      </div>
      <Drawer direction="right" open={drawer} onClose={clickhandler}>
        <div className={d.head}></div>
        <div className={d.main}>
          <button className={d.holder}>My Profile</button>
          <button className={d.holder} onClick={orderHandler}>My Orders</button>
          <div className={d.holders}>
            {" "}
            <button onClick={logouthandler} className={d.logout}>
              Logout
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
