import axios from "axios";

const url = 'http://localhost:8081/ignite-reporting-service';

const REPORTING_API = axios.create({baseURL: url});

export default REPORTING_API;
