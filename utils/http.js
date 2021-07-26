import axios from "axios";
import AppError from "./AppError";

// Intercept all Errors
axios.interceptors.response.use(null, (err) => {
  const error = new AppError(err);

  return Promise.reject(error);
});

export const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_NEWSPAPER_API_BASE_URI_LOCAL
    : process.env.NEXT_PUBLIC_NEWSPAPER_API_BASE_URI;

const defaultOptions = (explicitToken) => ({
  // timeout's the request in a minute by default
  timeout: 60 * 1000,
  withCredentials: true,
  credentials: "include",
  // headers: {
  //   authorization: `Bearer ${explicitToken}`,
  // },
});

const buildOptions = (options) => ({
  ...defaultOptions(options?.token),
  ...options,
});
const buildURL = (path) => baseURL + path;

const http = {
  get: (path, options) =>
    axios.get(options?.url || buildURL(path), buildOptions(options)),
  post: (path, data, options) =>
    axios.post(options?.url || buildURL(path), data, buildOptions(options)),
  patch: (path, data, options) =>
    axios.patch(options?.url || buildURL(path), data, buildOptions(options)),
  delete: (path, options) =>
    axios.delete(options?.url || buildURL(path), buildOptions(options)),
};

// Helpers
export const getNews = async (options) => {
  const { data } = await http.get("/posts", options);

  return data;
};

export default http;
