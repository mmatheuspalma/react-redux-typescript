import axios from 'axios';

axios.interceptors.request.use(
   request => {
      return {
         ...request,
         baseURL: `${process.env.REACT_APP_API_BASE}/`,
      };
   },
   error => Promise.reject(error),
);

export const get = (url: string, params?: object) => axios.get(url, params);
export const post = (url: string, data?: object, params?: object) => axios.post(url, data, params);
export const put = (url: string, data?: object, params?: object) => axios.put(url, data, params);
export const remove = (url: string, params?: object) => axios.delete(url, params);
