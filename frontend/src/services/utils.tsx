import axios, { AxiosHeaders } from "axios";

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