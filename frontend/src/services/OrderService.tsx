import { IBusinessDay, IOrder } from "../models/models";
import { BACKEND_URL, axiosClient } from "./utils";


const getAPIUrl = () => {
    return `${BACKEND_URL}/api`;
}

// const getAPIUrl = (id?: number) => {
//     var urlId: string;
//     id === undefined ? urlId = "" : urlId = id.toString();
//     return `${BACKEND_URL}/location/${urlId}`;
// }


export const getLocation = async (id: number) => {
    const url = getAPIUrl(id);
    const res = await (await axiosClient).get<ILocation>(url);
    return res.data;
}

export const getLocations = async () => {
    const url = getAPIUrl();
    const res = await (await authenticatedClient).get<ILocation[]>(url);
    return res.data;
}

export const addLocation = async (location?: ILocation | undefined) => {
    const url = getAPIUrl();
    const locationJson = JSON.stringify(location)
    return await (await authenticatedClient).post<ILocation>(url, locationJson);
}

export const deleteLocation = async (id: number) => {
    const url = getAPIUrl(id);
    return await (await authenticatedClient).delete(url);
}

export const editLocation = async (location?: ILocation | undefined) => {
    const url = getAPIUrl();
    const locationJson = JSON.stringify(location)
    return await (await authenticatedClient).put<ILocation>(url, locationJson);
}



// Help methods
export const getBusinessDay = async (date: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/getBusinessDay/${date}`;
    const res = await (await axiosClient).get<IBusinessDay>(url);
    return res.data;
}

export const getBusinessDays = async (startDate: Date, endDate: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/getBusinessDays/${startDate}/${endDate}`;
    const res = await (await axiosClient).get<IBusinessDay[]>(url);
    return res.data;
}


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





