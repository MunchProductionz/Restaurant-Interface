import { useOrders } from "../../orders/useOrders";
import OrderStatusDropdown from "./OrderStatusDropdown";

const OrderList = () => {
    const { orders, updateOrderStatus } = useOrders();

    return (
        <table>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Customer Name</th>
            <th>Order Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.date}</td>
              <td>{order.customerName}</td>
              <td>{order.orderPrice}</td>
              <td>
                <OrderStatusDropdown
                  orderId={order.orderId}
                  currentStatus={order.status}
                  onStatusChange={(orderId, newStatus) => updateOrderStatus(orderId, newStatus)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default OrderList;
