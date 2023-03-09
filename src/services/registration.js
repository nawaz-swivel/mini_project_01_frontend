import axios from "axios";

const url = 'http://localhost:8081/ignite-registration-service';

const REGISTRATION_API = axios.create({baseURL: url});

export default REGISTRATION_API;
