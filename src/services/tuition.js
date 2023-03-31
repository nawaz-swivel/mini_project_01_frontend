import axios from "axios";

const url = process.env.REACT_APP_TUITION_API_URL;

export const TUITION_API = (token) => {
    // const API = axios.create({baseURL: 'http://localhost:8080/ignite-tuition-service'});
    const API = axios.create({baseURL: url});

    API.interceptors.request.use((req) => {
        req.headers.Authorization = `Bearer ${token}`;
        return req;
    });
    return API;
}
