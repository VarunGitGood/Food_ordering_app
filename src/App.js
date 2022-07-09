import React, { useState } from "react";
import s from "./App.module.css";
import { Cart } from "./components/Modal/Cart";
import { Info } from "./components/UI/Info";
import { Main } from "./components/UI/Main";
import { NavBar } from "./components/UI/NavBar";
import CartProvider from "./context/CartProvider";

function App() {

  const [showmodal , setshowmodal] = useState(false)


  const showModalHandler = e => {
    console.log(e);
    setshowmodal(e.showModal)
  }

  const closeModalHandler = e => {
    setshowmodal(e.showModal)
  }


  return (
    <CartProvider>
      <div className={s.App}>
        {showmodal && <Cart onClose={closeModalHandler}/>}
        <NavBar onModal={showModalHandler}/>
        <Info />
        <Main/>
        </div>
    </CartProvider>
  );
}

export default App;
