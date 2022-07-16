import React, { useContext, useState } from "react";
import { CartButton } from "./CartButton";
import s from "./NavBar.module.css";
import Drawer from "react-modern-drawer";
import d from "./Drawer.module.css";
import "react-modern-drawer/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/cart-context";
import OrderModal from "../Modal/OrderModal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Profile from "../Modal/Profile";

library.add(fab);

export const NavBar = (props) => {
  const ctx = useContext(CartContext);
  const [drawer, setdrawer] = useState(false);
  const [order, setorder] = useState(false);
  const [profile, setprofile] = useState(false);
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
    setorder((prev) => !prev);
  };
  // const profileHandler = () => {
  //   setdrawer((prev) => !prev);
  //   setprofile((prev) => !prev);
  // };

  return (
    <>
      {order && (
        <OrderModal
          onClose={(e) => {
            setorder((prev) => !prev);
          }}
        />
      )}
      {/* {profile && (
        <Profile onClose={e => {setprofile((prev) => !prev)}}/>
      )} */}
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
          <button className={d.holder} onClick={orderHandler}>
            My Orders
          </button>
          <button className={d.holder}>Payment</button>
          <div className={d.holders}>
            {" "}
            <button onClick={logouthandler} className={d.logout}>
              Logout
            </button>
          </div>
          <div className={d.plugin}>
            <span>Follow For More</span>
            <div className={d.icons}>
              <a href="https://www.instagram.com/varunsingh__7/"><FontAwesomeIcon icon={["fab", "instagram"]} bounce size="2x" ></FontAwesomeIcon></a>
              <a href="https://github.com/a1pharooster"><FontAwesomeIcon icon={["fab", "github"]} bounce size="2x"/></a>
              <a href="https://www.linkedin.com/in/varun-singh-018242224/"><FontAwesomeIcon icon={["fab", "linkedin"]} bounce size="2x"/></a>
              
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
