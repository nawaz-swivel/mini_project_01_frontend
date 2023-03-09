import axios from "axios";

const url = process.env.REACT_APP_REGISTRATION_API_URL;

const REGISTRATION_API = axios.create({baseURL: url});

export default REGISTRATION_API;
