import { createContext } from 'react';
import { IOrder } from '../models/models';

export interface OrderContextType {
  orders: IOrder[];
  updateOrderStatus: (orderId: number, newStatus: string) => void;
  fetchOrders: (startDate: Date, endDate: Date) => void;
}

const initialOrderContext: OrderContextType = {
    orders: [],
    updateOrderStatus: () => {},
    fetchOrders: () => {},
  };

export const OrderContext = createContext<OrderContextType>(initialOrderContext);