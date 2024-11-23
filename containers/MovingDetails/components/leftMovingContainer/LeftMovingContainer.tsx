import React from 'react'
import "./LeftMovingContainer.css"
// import { RestSub } from './components/RestSub'
import { OrdersFromRestaurant } from './components/OrdersFromRestaurant'
export const LeftMovingContainer = () => {
  return (
    <div className='LeftRestaurantContainer'>
      {/* <RestSub /> */}
      <OrdersFromRestaurant />
    </div>
  )
}
