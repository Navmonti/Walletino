import axios from "axios";
import config from "../constants/config";

const customAxios = axios.create({
    baseURL: `${config.apiAddress}/api`,
    timeout: 10000,
    headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' }
});

const requestHandler = (request: any) => {
    var token = localStorage.getItem("token");
    request.headers.Authorization = `Bearer ${token}`
    return request;
};

const responseHandler = (response: any) => {
    //if (response.status === 401) {
    //    window.location = '/login';
    //}
    return response;
};

const errorHandler = (error: any) => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default customAxios;