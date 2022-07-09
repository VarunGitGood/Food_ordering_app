import React from 'react'

export const CartContext = React.createContext({
  list: [],
  totalAmount:0,
  addItem : (item) => {},
  removeItem : (id) => {}
})
