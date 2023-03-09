import axios from "axios";

const url = process.env.REACT_APP_PAYMENT_API_URL;

const PAYMENT_API = axios.create({baseURL: url});

export default PAYMENT_API;
