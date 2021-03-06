//handle HTTP calls to the backend

import axios from "axios";
import { keys } from "./Keys";


// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: keys.API_URL+"/api/",
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Token ${token}`;
    return config;
  });
};

export default APIKit;
