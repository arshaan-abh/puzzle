import axios from 'axios';

const http = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
  timeout: 20000,
  headers: {
    'content-type': 'application/json',
    Accept: '*/*',
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      //TODO:: redirect to login
    }
    return Promise.reject(error);
  },
);

http.interceptors.request.use(
  (config) => {
    //TODO:: grab token
    const token = false;
    const validBaseUrl = config.baseURL!.startsWith(`${import.meta.env.VITE_APP_BASE_URL}`);
    if (token && validBaseUrl) {
      config.headers!.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default http;
