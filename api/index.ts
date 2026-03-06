import axios, { AxiosError } from "axios";
export const api = axios.create({
  baseURL: "http://3.90.78.102",
});
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Добавляем CSRF токен
    const csrftoken = localStorage.getItem("csrftoken"); // или получаем из cookie
    if (csrftoken && config.headers) {
      config.headers["X-CSRFTOKEN"] = csrftoken;
    }
  }
  return config;
});
// api.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     if (typeof window !== "undefined") {
//       const status = error.response?.status;
//       if (status === 401) {
//         localStorage.removeItem("access_token");
//         const path = window.location.pathname;
//         if (path !== "/login" && path !== "/register") {
//           window.location.replace("/login");
//         }
//       }
//     }
//     return Promise.reject(error);
//   },
// );
