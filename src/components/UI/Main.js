import React from 'react'
import { FoodHolder } from '../Holders/FoodHolder'

export const Main = (props) => {

  const menu = [
    {
      name:"Aloo paratha",
      cost: 15,
      id: 0,
      quantity:0
    },
    {
      name:'Fried Manchurian Rice',
      cost: 45,
      id: 1,
      quantity: 0
    },
    {
      name:'Manchurian Noodles',
      cost: 45,
      id: 2,
      quantity: 0
    },
    {
      name:'Malai kofta',
      cost: 90,
      id: 3,
      quantity: 0
    },
    {
      name:'Chai',
      cost: 10,
      id: 4,
      quantity: 0
    },
    {
      name:'Coffee',
      cost: 10,
      id: 5,
      quantity: 0
    }
  ]

  return (
    <div>{menu.map(items => {
      return <FoodHolder data={items} key={items.id}/>
    })}</div>
  )
}
