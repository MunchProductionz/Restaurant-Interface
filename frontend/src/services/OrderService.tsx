import { IOrder } from "../models/models";
import { axiosClient, getAPIUrl } from "./utils";

// Order methods
export const getOrdersFromDate = async (date: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/getOrders/${date}`;
    const res = await (await axiosClient).get<IOrder[]>(url);
    return res.data;
}

export const getOrdersFromRange = async (startDate: Date, endDate: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/getOrdersRange/${startDate}/${endDate}`;
    const res = await (await axiosClient).get<IOrder[]>(url);
    return res.data;
}

export const updateOrder = async (date: Date, orderId: number, order?: IOrder | undefined) => {
    const APIUrl = getAPIUrl();
    const orderJson = JSON.stringify(order)
    const url = `${APIUrl}/updateOrder/${date}/${orderId}`;
    return await (await axiosClient).put<IOrder>(url, orderJson);
}