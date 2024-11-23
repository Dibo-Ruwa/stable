import React from 'react'
import { OrderedServices } from './ordered-service-cards/OrderedServices'
import './user-services-orders.css'


export const UserServicesOrders = () => {
  return (
    <>
      <div className="card_active_container">
        <button className="active_services services_btn">Active</button>
        <button className="services_btn">Rendered</button>
      </div>
      <div className="user_card_overflow">
        <OrderedServices />
      </div>
    </>
  );
}
