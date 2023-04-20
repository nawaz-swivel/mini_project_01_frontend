import axios from "axios";

// const url = process.env.REACT_APP_STUDENT_API_URL;
const url = 'http://18.204.14.92:8080/ignite-student-service';

export const STUDENT_API = (token) => {
    // const API = axios.create({baseURL: 'http://localhost:8080/ignite-student-service'});
    const API = axios.create({baseURL: url});

    API.interceptors.request.use((req) => {
        req.headers.Authorization = `Bearer ${token}`;
        return req;
    });
    return API;
}
