import React from 'react'
import "./LeftRestaurantContainer.css"
import { RestSub } from './components/RestSub'
import { OrdersFromRestaurant } from './components/OrdersFromRestaurant'
export const LeftRestaurantContainer = () => {
  return (
    <div className='LeftRestaurantContainer'>
      <RestSub />
      <OrdersFromRestaurant />
    </div>
  )
}
