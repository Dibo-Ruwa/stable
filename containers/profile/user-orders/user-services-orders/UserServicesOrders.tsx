import React from 'react'
import { OrderedServices1 } from './ordered-service-cards/OrderedServices1'
import { OrderedServices2 } from './ordered-service-cards/OrderedServices2'
import { OrderedServices3 } from './ordered-service-cards/OrderedServices3'
import { OrderedServices4 } from './ordered-service-cards/OrderedServices4'
import { OrderedServices5 } from './ordered-service-cards/OrderedServices5'
import { OrderedServices6 } from './ordered-service-cards/OrderedServices6'
import { OrderedServices7 } from './ordered-service-cards/OrderedServices7'
import './user-services-orders.css'


export const UserServicesOrders = () => {
  return (
    <>
      <div className="card_active_container">
        <button className="active_services services_btn">Active</button>
        <button className="services_btn">Rendered</button>
      </div>
      <div className="user_card_overflow">
        <OrderedServices1 />
        <OrderedServices2 />
        <OrderedServices3 />
        <OrderedServices4 />
        <OrderedServices5 />
        <OrderedServices6 />
        <OrderedServices7 />
      </div>
    </>
  );
}
