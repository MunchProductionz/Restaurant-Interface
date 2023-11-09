import { IBusinessDay } from "../models/models";
import { axiosClient, getAPIUrl } from "./utils";


// Hours methods
export const getBusinessDays = async (startDate: Date, endDate: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/getBusinessDays/${startDate}/${endDate}`;
    const res = await (await axiosClient).get<IBusinessDay[]>(url);
    return res.data;
}