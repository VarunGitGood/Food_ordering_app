import React, { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCart = {
  list: [],
  totalAmount: 0,
};

const handler = (state, action) => {
  if (action.type === "add-item") {
    const updatedTotalAmount =
      state.totalAmount + action.item.cost * action.item.quantity;
    const ifexist = state.list.findIndex((e) => e.id === action.item.id);
    console.log(ifexist);
    let updatedItems;
    const existingItem = state.list[ifexist];

    if (existingItem) {
      updatedItems = [...state.list];
      updatedItems[ifexist] = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
    } else {
      updatedItems = state.list.concat(action.item);
    }
    return {
      list: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "remove-item") {
    const filter = (e) => {
      if (e.id !== action.item.id) {
        return e;
      }
    };
    const ifexist = state.list.findIndex((e) => e.id === action.item.id);
    let updatedItems;
    let tobechanged = state.list[ifexist];
    if (state.list[ifexist].quantity === 1) {
      updatedItems = state.list.filter(filter);
    } else {
      // some amount present
      updatedItems = [...state.list];
      updatedItems[ifexist] = {
        ...tobechanged,
        quantity: tobechanged.quantity - 1,
      };
    }

    const updatedTotalAmount = state.totalAmount - action.item.cost;

    return {
      list: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  else if(action.type === "destroy-cart")
  { 
    const updatedItems = []
    const updatedTotalAmount = 0

    return {
      list:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return state;
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


  const [state, dispatch] = useReducer(handler, defaultCart);

  const ctx = {
    list: state.list,
    totalAmount: state.totalAmount,
    addItem: additemhandler,
    removeItem: removeitemhandler,
    destroyCart: destroyHandler
  };

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
