import axios from "axios";

// const url = process.env.REACT_APP_TUITION_API_URL;
const url = 'http://3.83.253.64:8080/ignite-tuition-service';

export const TUITION_API = (token) => {
    // const API = axios.create({baseURL: 'http://localhost:8080/ignite-tuition-service'});
    const API = axios.create({baseURL: url});

    API.interceptors.request.use((req) => {
        req.headers.Authorization = `Bearer ${token}`;
        return req;
    });
    return API;
}
