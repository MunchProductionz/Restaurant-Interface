import { useContext } from "react";
import { OrderContext } from "./OrderContext";


export const useOrders = () => {
    const context = useContext(OrderContext);
    if (!context) {
      throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
  }