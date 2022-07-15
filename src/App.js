import React, { useContext, useState } from "react";
import s from "./App.module.css";
import { Cart } from "./components/Modal/Cart";
import { Info } from "./components/UI/Info";
import { Main } from "./components/UI/Main";
import { NavBar } from "./components/UI/NavBar";
import Auth from "./components/Auth/Auth";
import { CartContext } from "./context/cart-context";

function App() {

  const ctx = useContext(CartContext)
  let log = ctx.loggedIn


  const [showmodal, setshowmodal] = useState(false);

  const showModalHandler = (e) => {
    console.log(e);
    setshowmodal(e.showModal);
  };

  const closeModalHandler = (e) => {
    setshowmodal(e.showModal);
  };

  const clickHandler = (e) => {
    console.log(e);
  };

  

  return (
    <>
      {log ? (
          <div className={s.App}>
            {showmodal && <Cart onClose={closeModalHandler} />}
            <NavBar onModal={showModalHandler} />
            <Info />
            <Main />
          </div>
      ) : (
        <Auth onCreate={clickHandler} />
      )}
    </>
  );
}

export default App;
