import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.9:3333",
});

/* Interceptar todas as requisições feitas

    api.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
}); */

// Interceptar todas as respostas
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };
