import {
    FC,
} from "react";
import Orders from '../Orders/Orders';
import DateRangePicker from "../Dates/DateRangePicker";
import { useOrders } from "../../orders/useOrders";


export const Homepage: FC = () => {
    const { fetchOrders } = useOrders();

    const handleDateRangeChange = (startDate: Date, endDate: Date) => {
        fetchOrders(startDate, endDate);
    }

    return (
      <>
        <div className="blocks">
        <div className="block">
            <h3>Order Management System</h3>
            <DateRangePicker onDateRangeChange={(startDate, endDate) => handleDateRangeChange(startDate, endDate)}/>
            <Orders />
        </div>
        {/* <div className="block">
            <h3>Edit / Add</h3>
            <EditAddLocation />
        </div> */}
        </div>
      </>
    )
  }