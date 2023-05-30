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
