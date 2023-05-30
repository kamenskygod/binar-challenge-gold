import { useEffect, useState } from 'react';
import { fetchApi, postApi } from '../config/services';

const useFetchingHooks = ({ url, parameter }) => {
  const [params, setParams] = useState(parameter);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState('idle');
  useEffect(() => {
    setloading('fetching');
    fetchApi(url, params)
      .then((result) => {
        setData(result);
        setloading('resolve');
      })
      .catch((e) => {
        setError(e.message);
        setloading('reject');
      });
  }, [params, url]);

  const mutation = (url, params) => {
    setloading('fetching');
    postApi(url, params)
      .then((result) => {
        setData(result);
        setloading('resolve');
      })
      .catch((e) => {
        setError(e.message);
        setloading('reject');
      });
  };

  return {
    data,
    setParams,
    params,
    error,
    loading,
    mutation,
  };
};

export default useFetchingHooks;
