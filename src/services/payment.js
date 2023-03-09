import axios from "axios";

const url = 'http://localhost:8081/ignite-payment-service';

const PAYMENT_API = axios.create({baseURL: url});

export default PAYMENT_API;
