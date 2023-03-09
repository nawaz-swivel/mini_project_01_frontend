import axios from "axios";

const url = process.env.REACT_APP_REPORTING_API_URL;

const REPORTING_API = axios.create({baseURL: url});

export default REPORTING_API;
