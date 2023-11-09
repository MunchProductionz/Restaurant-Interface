import axios, { AxiosHeaders } from "axios";
import { IBusinessDay, IOrder } from "../models/models";

export const BACKEND_URL = "http://127.0.0.1:8000/api/";


const createAxiosHeaders = async () => {
    const axiosHeaders = new AxiosHeaders();
    axiosHeaders.set("Content-Type", "application/json");
    axiosHeaders.set("Access-Control-Allow-Origin", "*");
    axiosHeaders.set(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    return axiosHeaders;
};

const createAxiosClient = async () => {
const axiosHeaders = await createAxiosHeaders();
return axios.create({
    headers: axiosHeaders,
    responseType: "json",
    responseEncoding: "utf8",
    });
};

export const axiosClient = createAxiosClient();



// Help methods
export const getAPIUrl = () => {
    return `${BACKEND_URL}/api`;
}


export const addBusinessDay = async (date: Date, businessDay?: IBusinessDay | undefined) => {
    const APIUrl = getAPIUrl();
    const businessDayJson = JSON.stringify(businessDay)
    return await (await axiosClient).post<IBusinessDay>(APIUrl, businessDayJson);
}

export const addOrder = async (date: Date, orderId: number, order?: IOrder | undefined) => {
    const APIUrl = getAPIUrl();
    const orderJson = JSON.stringify(order)
    return await (await axiosClient).post<IOrder>(APIUrl, orderJson);
}

export const updateBusinessDay = async (date: Date, businessDay?: IBusinessDay | undefined) => {
    const APIUrl = getAPIUrl();
    const businessDayJson = JSON.stringify(businessDay)
    return await (await axiosClient).put<IBusinessDay>(APIUrl, businessDayJson);
}

export const deleteBusinessDay = async (date: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/deleteBusinessDay/${date}`;
    return await (await axiosClient).delete(url);
}

export const deleteOrder = async (date: Date, orderId: number) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/deleteOrder/${date}/${orderId}`;
    return await (await axiosClient).delete(url);
}