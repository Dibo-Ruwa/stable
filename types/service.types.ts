import { ReactNode } from 'react';

export interface ServiceQuote {
  _id: string;
  type: 'moving' | 'cleaning' | 'laundry';
  status: 'pending' | 'paid' | 'processing' | 'delivered' | 'dispatched';
  isPaid: boolean;
  total: number;
  date: string;
  pickUpTime?: string;
  currentLocation?: string;
  deliveryLocation?: string;
  from?: string;
  user: {
    address: string;
  };
  items: {
    _id: string;
    name: string;
    amount: number;
  }[];
}

export interface ServiceOrderDetailsProps {
  orderId: string;
  quote: ServiceQuote;
}

export interface StatusConfig {
  bg: string;
  text: string;
  icon: ReactNode;
  label: string;
}
