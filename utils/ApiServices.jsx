import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_LIVE_URL;
const DomainName = import.meta.env.VITE_APP_DOMAIN_NAME;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    domainName: DomainName,
  },
});

// Set up an interceptor to dynamically add the `Authorization` header before each request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Define common API methods using the Axios instance
const get = (url, config = {}) => apiClient.get(url, config);
const _delete = (url, config = {}) => apiClient.delete(url, config);
const put = (url, data = {}, config = {}) => apiClient.put(url, data, config);
const post = (url, data = {}, config = {}) => apiClient.post(url, data, config);

export { get, _delete, put, post };
