import React, { useEffect, useReducer } from "react";
import { CartContext } from "./cart-context";
import { handler } from "./reducer";

const defaultCart = {
  list: [],
  totalAmount: 0,
  loggedIn: window.localStorage.getItem("isloggedin") || false
};



const CartProvider = (props) => {

 
  const additemhandler = (item) => {
    dispatch({ type: "add-item", item: item });
  };

  const removeitemhandler = (item) => {
    dispatch({ type: "remove-item", item: item });
  };

  const destroyHandler = () => {
    dispatch({type: "destroy-cart"})
  }
  const loginHandler = (bool,uid) => {
    dispatch({type: "update-state" , bool : bool, uid:uid})
  }




  const [state, dispatch] = useReducer(handler, defaultCart);

  const ctx = {
    list: state.list,
    totalAmount: state.totalAmount,
    loggedIn: state.loggedIn,
    addItem: additemhandler,
    removeItem: removeitemhandler,
    destroyCart: destroyHandler,
    isLoggedIn : loginHandler,
  };

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
