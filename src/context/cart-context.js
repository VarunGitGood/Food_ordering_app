import React from 'react'

export const CartContext = React.createContext({
  list: [],
  totalAmount:0,
  loggedIn:false,
  addItem : (item) => {},
  removeItem : (id) => {},
  isLoggedIn : (bool) => {}
})
