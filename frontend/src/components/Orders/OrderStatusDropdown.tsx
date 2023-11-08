import React, { useState } from 'react';

interface IOrderStatusDropdown {
  orderId: number;
  currentStatus: string;
  onStatusChange: (orderId: number, newStatus: string) => void;
}

const OrderStatusDropdown: React.FC<IOrderStatusDropdown> = ({
  orderId,
  currentStatus,
  onStatusChange,
}) => {
  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onStatusChange(orderId, newStatus);
  };

  return (
    <select value={status} onChange={handleStatusChange}>
      <option value="New">New</option>
      <option value="In progress">In progress</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default OrderStatusDropdown;