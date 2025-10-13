import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json"
  }
})


let firebaseToken = null;

export const setToken = (token) => {
  firebaseToken = token;
};

api.interceptors.request.use(function (config) {
  if (firebaseToken) {
    config.headers.Authorization = `Bearer ${firebaseToken}`
  }

  return config;
}, function (error) {
  return Promise.reject(error);
}
);
