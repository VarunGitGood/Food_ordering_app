import React from "react";
import { CartButton } from "./CartButton";
import s from './NavBar.module.css'
export const NavBar = (props) => {



  const pressHandler = e => {
    props.onModal(e)
  }


  return (
    <div className={s.nav}>
      <div className={s.title}>OJAS</div>
      <CartButton onPress={pressHandler}></CartButton>
    </div>
  );
};
