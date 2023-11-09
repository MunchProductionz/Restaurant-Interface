import { IBusinessDay } from "../models/models";
import { axiosClient, getAPIUrl } from "./utils";

// Statistics methods
export const getAverageNumberOfHoursPerWeek = async () => {
    // Get BusinessDays 4 weeks back in time (use getBusinessDays in HoursService.tsx)
    // Split the BusinessDays into their respective weeks (match the week number)
    // Calculate the average number of hours per week
    // Return tuple with the week number and the average number of hours
}

export const getBusinessDay = async (date: Date) => {
    const APIUrl = getAPIUrl();
    const url = `${APIUrl}/getBusinessDay/${date}`;
    const res = await (await axiosClient).get<IBusinessDay>(url);
    return res.data;
}