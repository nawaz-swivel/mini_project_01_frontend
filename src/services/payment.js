import axios from "axios";

// const url = process.env.REACT_APP_PAYMENT_API_URL;
const url = 'http://3.83.253.64:8080/ignite-payment-service';

export const PAYMENT_API = (token) => {
    // const API = axios.create({baseURL: 'http://localhost:8080/ignite-payment-service'});
    const API = axios.create({baseURL: url});

    API.interceptors.request.use((req) => {
        req.headers.Authorization = `Bearer ${token}`;
        return req;
    });
    return API;
}
