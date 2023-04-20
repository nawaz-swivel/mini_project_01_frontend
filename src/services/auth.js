import axios from "axios";

// const url = process.env.REACT_APP_AUTH_API_URL;
const url = 'http://54.237.225.107:8080/ignite-auth-service';

// const AUTH_API = axios.create({baseURL: 'http://localhost:8080/ignite-auth-service'});
const AUTH_API = axios.create({baseURL: url});

AUTH_API.interceptors.request.use((req) => {
    req.headers.Authorization = 'Basic ' + btoa('ignite-client:1234');

    return req;
});
export default AUTH_API;
