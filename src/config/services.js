import axios from 'axios';
import { token } from './token';

export const fetchApi = (url, params) => {
  return axios.get(url, {
    params,
    headers: {
      Authorization: token,
    },
  });
};

export const postApi = (url, params) => {
  return axios.post(url, {
    ...params,
  });
};

export const Services = () => {
  return {
    get: (url, params, config) => {
      return axios.get(url, { ...params }, { ...config });
    },
    post: (url, params, config) => {
      return axios.post(url, { ...params }, { ...config });
    },
    put: (url, params, config) => {
      return axios.post(url, { ...params }, { ...config });
    },
    delete: (url, params, config) => {
      return axios.delete(url, { ...params }, { ...config });
    },
  };
};
