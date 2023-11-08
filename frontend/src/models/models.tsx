export interface IOrder {
    orderId: number;
    date: string;
    customerName: string;
    items: string[];
    orderPrice: number;
    status: "New" | "In progress" | "Completed" | "Cancelled";
}

export interface IDateRangePicker {
    onDateRangeChange: (startDate: Date, endDate: Date) => void;
}

export interface IOrderStatusDropdown {
    orderId: number;
    currentStatus: string;
    onStatusChange: (orderId: number, newStatus: string) => void;
}