import { PropsWithChildren, useEffect, useState } from "react";
import { IOrder } from "../models/models";
import { OrderContext, OrderContextType } from './OrderContext';


export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [orders, setOrders] = useState<IOrder[]>([]);
  
    const orderValue: OrderContextType = {
        orders: orders,
        updateOrderStatus: (orderId: number, newStatus: string) => {
            const currentIndex = orders.findIndex((order) => order.orderId === orderId);
            const updatedOrders = [...orders];
            updatedOrders[currentIndex].status = newStatus as "New" | "In progress" | "Completed" | "Cancelled";
            setOrders(updatedOrders);
        },
        fetchOrders: (startDate: Date, endDate: Date) => {
            // getOrders(startDate, endDate).then((orders) => setOrders(orders));
            console.log("fetchOrders")
        },
    };
  
    useEffect(() => {
      // Fetch initial data when the component mounts
    //   getOrders(new Date(), new Date()).then((orders) => setOrders(orders));
        console.log("OrderProvider useEffect");
    }, []);

  
    return (
      <OrderContext.Provider value={ orderValue }>
        {children}
      </OrderContext.Provider>
    );
  };