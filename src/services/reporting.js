import axios from "axios";

const url = process.env.REACT_APP_REPORTING_API_URL;

export const REPORTING_API = (token) => {
    // const API = axios.create({baseURL: 'http://localhost:8080/ignite-reporting-service'});
    const API = axios.create({baseURL: url});

    API.interceptors.request.use((req) => {
        req.headers.Authorization = `Bearer ${token}`;
        return req;
    });
    return API;
}
