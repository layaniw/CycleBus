//handle HTTP calls to the backend

import axios from "axios";

const API_URL="http://192.168.0.54:8000"
// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: API_URL+"/api/",
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
